import { Button } from "@material-ui/core"
import useAutocomplete from "@material-ui/lab/useAutocomplete"
import cx from "classnames"
import { AppCard, AppLoading, CircleIcon, Screen, TextInputWithIcon } from "components"
import moment from "moment"
import { useSnackbar } from "notistack"
import React from "react"
import { Check, CreditCard, Edit2, MapPin, Phone, User, X } from "react-feather"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { useHistory } from "react-router-dom"
import { Paths } from "router"
import { AddressModel, useGetProductsByIdsQuery } from "services/apis"
import { useQueryGetCart } from "services/apis/cart.api"
import { placeOrder } from "services/apis/order.api"
import { typography } from "theme"
import { formatMoney, strings } from "utils"
import { useAccountStore, useCartStore } from "zustands"
import { OrderItem } from "./components/OrderItem"
import { OrderEmptyScreen } from "./OrderEmptyScreen"

interface OrderGeneralScreenProps {}

export const OrderGeneralScreen: React.FC<OrderGeneralScreenProps> = () => {
  const { data: cart, isFetching, refetch } = useQueryGetCart()
  const { updateLength } = useCartStore()

  if (isFetching) return <AppLoading />
  const isEmpty = cart?.products?.length <= 0

  if (isEmpty || !cart?.products) return <OrderEmptyScreen />

  return (
    <div className="flex">
      <Screen className="flex flex-col w-2/3">
        {cart?.products?.map((v) => {
          return (
            <OrderItem
              item={v}
              key={v.productId}
              onRemoveItemSuccess={() => {
                refetch()
                updateLength()
              }}
            />
          )
        })}
      </Screen>

      <div className="fixed top-0 bottom-0 right-0 z-0 w-1/3 px-20 py-20 bg-white border-l-2 border-gray-300" />
      <OrderSidebar cart={cart.products} />
    </div>
  )
}

type ProductWithAmount = {
  product?: API.ProductData
  amount?: number
}

const calcPrice = (products: ProductWithAmount[]): number => {
  if (!products) return 0
  let price = 0
  products.forEach((v) => {
    if (v?.amount && v?.product) price += v?.amount * v?.product?.price
  })
  return price
}

const notHaveTx = "Not have yet!"

type Inputs = {
  name: string
  address: string
  phoneNumber: string
  payment: string
}

const OrderSidebar: React.FC<{ cart: API.Cart[] }> = ({ cart }) => {
  const history = useHistory()
  const { account } = useAccountStore()
  const { addresses } = account
  const productsIds = cart.map((v) => v.productId)
  const { enqueueSnackbar } = useSnackbar()
  const { updateLength } = useCartStore()
  const { data: products } = useGetProductsByIdsQuery(productsIds)

  const [mutOrder] = useMutation(placeOrder, {
    onError(e) {
      enqueueSnackbar(e, { variant: "warning" })
    },
    onSuccess(d) {
      enqueueSnackbar("Order successfully")
      updateLength()
      history.push(Paths.orderSuccess + d?.id)
    },
  })

  const firstAddress = addresses?.length > 0 ? addresses[0] : undefined

  const defaultName = firstAddress ? firstAddress.name : account.name || notHaveTx
  const defaultPhone = firstAddress ? firstAddress.phoneNumber : account.phoneNumber || notHaveTx
  const { register, handleSubmit, setValue } = useForm<Inputs>({
    defaultValues: {
      name: defaultName,
      address: firstAddress?.value || "",
      phoneNumber: defaultPhone,
      payment: "COD",
    },
  })

  React.useEffect(() => {
    register({ name: "address" }) // custom register react-select
  }, [register])

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    inputValue,
  } = useAutocomplete({
    id: "use-autocomplete-address",
    options: addresses,
    getOptionLabel: (option: AddressModel) => option.value,
    freeSolo: true,
    defaultValue: firstAddress,
    onChange: (e, v: any, r) => {
      if (v && r === "select-option") {
        setValue("phoneNumber", v?.phoneNumber)
        setValue("name", v?.name)
        setValue("address", v?.value)
      }
    },
  })

  const [editReceiverInfo, setEditReceiver] = React.useState(false)
  const [editPayment, setEditPayment] = React.useState(false)

  const productsWithPrice: any = products?.map((v) => {
    const item = cart.find((c) => c.productId === v.id)
    return {
      amount: item?.amount,
      product: v,
    }
  })
  const subtotal = calcPrice(productsWithPrice)
  const totalPrice = subtotal - subtotal * 0

  const onSubmit = (data: Inputs) => {
    const inputData: API.OrderInput = {
      receiverAddress: inputValue,
      note: "nothing",
      cashType: data?.payment,
      orderDate: new Date(),
      name: data.name,
      phone: data.phoneNumber,
    }
    mutOrder(inputData)
  }

  return (
    <div className="absolute inset-y-0 right-0 z-50 w-1/3 px-20 py-20">
      <div className="flex justify-center">
        <CircleIcon
          className="inline-block mx-auto text-white"
          onClick={() => history.push(Paths.home)}
        >
          <X className="text-white" />
        </CircleIcon>
      </div>
      {/* [> icon close<] */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-8">
          <AppCard className="max-w-md rounded-3xl">
            <CardTitle
              title="Shiping information:"
              onClick={() => setEditReceiver((p) => !p)}
              Icon={editReceiverInfo ? Check : Edit2}
            />

            <br />
            <br />
            <TextInputWithIcon
              disabled={!editReceiverInfo}
              Icon={User}
              text={account.name || ""}
              register={register}
              formName="name"
            />
            <br />
            <div className="flex " {...getRootProps()}>
              <MapPin className={cx("text-purple-500 mr-3")} />
              <input
                disabled={!editReceiverInfo}
                name={"address"}
                className={cx("bg-transparent outline-none text-gray-800", {
                  "border-b border-gray-300 pb-1 focus:border-primary": editReceiverInfo,
                })}
                {...getInputProps()}
              />
            </div>
            {groupedOptions.length > 0 ? (
              <ul
                {...getListboxProps()}
                className="absolute p-4 py-1 overflow-auto list-none bg-white border"
              >
                {groupedOptions.map((option, index) => (
                  <li
                    {...getOptionProps({ option, index })}
                    className="px-2 py-1 mb-2 hover:bg-blue-100"
                  >
                    {option.value}
                  </li>
                ))}
              </ul>
            ) : null}

            <br />
            <TextInputWithIcon
              disabled={!editReceiverInfo}
              Icon={Phone}
              text={account.phoneNumber || "Please add your number!"}
              register={register}
              formName="phoneNumber"
            />
          </AppCard>
          {/* [> info card <] */}

          <AppCard className="max-w-md my-8 rounded-3xl">
            <CardTitle
              title="Payment:"
              Icon={editPayment ? Check : Edit2}
              onClick={() => setEditPayment((p) => !p)}
            />
            <br />
            <br />
            <TextInputWithIcon
              Icon={CreditCard}
              text={"COD"}
              disabled={!editPayment}
              register={register}
              formName="payment"
            />
            <br />
          </AppCard>

          <div className={cx("flex flex-col text-gray-700", typography.h6)}>
            <div className="flex justify-between">
              <p>Expeceted delivery date:</p>
              <p className="text-right">{moment().format(strings.dateDisplay)}</p>
            </div>

            <br />
            <br />

            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p className="text-right">{formatMoney(subtotal)}</p>
            </div>
            <br />

            <div className="flex justify-between">
              <p>Fee:</p>
              <p className="text-right">0%</p>
            </div>

            <br />
            <br />

            <div className="flex justify-between font-semibold">
              <p>Total price: </p>
              <p className="text-right">{formatMoney(totalPrice)}</p>
            </div>

            <div className="w-full mx-auto my-12 border border-gray-300"></div>

            <div className="flex justify-end font-semibold">
              <Button
                variant="contained"
                color="primary"
                className="!font-semibold !rounded-xl"
                type="submit"
              >
                Place your order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

function CardTitle({
  title,
  onClick,
  Icon,
}: {
  title: string
  onClick?: () => void
  Icon: React.ElementType
}) {
  return (
    <div className="flex justify-between">
      <p className={typography.h5}>{title}</p>
      <Icon className="!text-gray-600 cursor-pointer" onClick={onClick} />
    </div>
  )
}
