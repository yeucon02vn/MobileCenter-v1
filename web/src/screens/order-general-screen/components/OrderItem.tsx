import { createStyles, makeStyles } from "@material-ui/core"
import { ImageWithFetch } from "components"
import { useSnackbar } from "notistack"
import React from "react"
import { Minus, Plus } from "react-feather"
import { useMutation } from "react-query"
import { useHistory } from "react-router-dom"
import { Paths } from "router"
import { addLovedProduct, deleteCartProduct, editAmount, useGetProduct } from "services/apis"
import { metrics, typography } from "theme"
import { formatMoney } from "utils"
import { useIncrement } from "utils/hooks/increment"

const useStyles = makeStyles(() =>
  createStyles({
    thumbnail: {
      width: metrics.img.sm,
      height: metrics.img.sm,
      cursor: "pointer",
    },
  }),
)

interface OrderItemProps {
  item: API.Cart
  onRemoveItemSuccess: () => void
}

export const OrderItem: React.FC<OrderItemProps> = (props) => {
  /* ------------- hooks ------------- */
  const { item, onRemoveItemSuccess } = props
  const { data, isFetching } = useGetProduct(item.productId)
  const history = useHistory()

  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const { value, increase, decrease } = useIncrement(item.amount)
  const [muDeleteProduct] = useMutation(deleteCartProduct, {
    onSuccess() {
      enqueueSnackbar("Delete successfully")
      onRemoveItemSuccess()
    },
    onError(e) {
      enqueueSnackbar(e, { variant: "warning" })
    },
  })
  const [muAddLoved] = useMutation(addLovedProduct, {
    onError(e) {
      enqueueSnackbar(e.message, {
        variant: "warning",
      })
    },
    onSuccess() {
      enqueueSnackbar("Added product to loved products")
    },
  })

  /* ------------- methods ------------- */
  const handleDesc = (e) => {
    e.stopPropagation()
    decrease()
    editAmount(item.productId, value)
  }
  const handleInc = (e) => {
    e.stopPropagation()
    increase()
    editAmount(item.productId, value)
  }
  const handleRemove = (e) => {
    e.stopPropagation()
    muDeleteProduct(item?.productId)
  }

  const handleSaved = (e) => {
    e.stopPropagation()
    deleteCartProduct(item.productId).then(() => {
      onRemoveItemSuccess()
    })
    muAddLoved(item.productId)
  }

  /* ------------- renders ------------- */
  if (isFetching) return <div>loading...</div>

  if (!data) return null
  const { productName, provider, price, discount, thumbnailId } = data

  return (
    <div
      className="flex p-8 my-8 cursor-pointer hover:shadow-card"
      onClick={() => history.push(Paths.productDetail + item.productId)}
    >
      <div>
        <ImageWithFetch
          // src={thumbnailUrl}
          imgId={thumbnailId}
          alt="thumbnailUrl"
          className={classes.thumbnail}
          effect="blur"
        />
      </div>
      <div className="px-16 ">
        <p className="text-gray-800">{productName}</p>
        <br />

        <p className="text-gray-500">Provide by: {provider}</p>
        <br />

        <div className="flex">
          <p className={typography.h5}>{formatMoney(price)}</p>
          <div className="flex items-center ml-8 text-gray-800">
            <Minus onClick={handleDesc} className="cursor-pointer" />
            <p className="mx-4">{value}</p>
            <Plus onClick={handleInc} className="cursor-pointer" />
          </div>
        </div>
        <br />

        <p className="text-gray-400">Discount {discount * 100} % </p>
        <br />

        <div className="flex">
          <p className="mr-4 text-purple-700 cursor-pointer" onClick={handleRemove}>
            Remove
          </p>
          <p className="text-orange-500 cursor-pointer" onClick={handleSaved}>
            Save for later
          </p>
        </div>
      </div>
    </div>
  )
}
