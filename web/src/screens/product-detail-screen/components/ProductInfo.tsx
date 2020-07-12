import { Button } from "@material-ui/core"
import cx from "classnames"
import { useSnackbar } from "notistack"
import React from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosAdd, IoIosRemove } from "react-icons/io"
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { useMutation, useQuery } from "react-query"
import { addCart } from "services/apis/cart.api"
import { typography } from "theme"
import { calcRating, formatMoney } from "utils"
import { useIncrement } from "utils/hooks/increment"
import { useCartStore } from "zustands"
import { getProductQuantity } from "services/apis/warehouse.api"

interface ProductInfoProps {
  product: API.ProductData
  totalQuestions: number
}

export const renderStar = (amount: number, Star: any) => {
  const list = new Array(amount).fill(0)
  return list.map((_, i) => {
    return (
      <div key={i}>
        <Star className="text-primary" />
      </div>
    )
  })
}

export const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  const { product, totalQuestions } = props
  const { productName: title, info, price, rate: rating, id } = product
  const { data: quantity, isLoading } = useQuery(["getProductQuantity", id], getProductQuantity, {
    enabled: !!id,
  })
  const { enqueueSnackbar } = useSnackbar()
  const { updateLength } = useCartStore()
  const descConv = info.descriptions
  const starRs = calcRating(rating)
  const commentCount = totalQuestions

  const {
    value: selectedQuantity,
    increase: insQuantity,
    decrease: descQuantity,
    setValue: setSelectedQuantity,
  } = useIncrement(1, quantity || Infinity)
  const onError = (e) => {
    console.log("e", e)
    enqueueSnackbar(e, {
      variant: "warning",
    })
  }

  const [mutAddCart] = useMutation(addCart, {
    onError,
    onSuccess() {
      enqueueSnackbar("Add to cart successfully")
      updateLength()
    },
  })
  /* ------------- renders ------------- */
  const iconsClasses = "cursor-pointer"
  if (isLoading) return null

  const renderAddToCart = () => {
    if (quantity > 0)
      return (
        <div className="flex my-8">
          <div className="px-8 py-2 mr-12 text-gray-800 border border-gray-600">
            <p className="mb-2 text-gray-800">Quantity</p>
            <div className="flex items-center justify-between pb-2">
              <IoIosRemove onClick={descQuantity} className={iconsClasses} />
              <input
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                style={{ width: 50 }}
                className="text-center"
                type="number"
              />
              <IoIosAdd onClick={insQuantity} className={iconsClasses} />
            </div>
          </div>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AiOutlineShoppingCart />}
            onClick={() =>
              mutAddCart({
                productId: id,
                amount: Number(selectedQuantity),
              })
            }
          >
            Add to cart
          </Button>
        </div>
      )

    return (
      <div className={"flex my-8"}>
        <p className={typography.h4}>Sorry we out of stock in this products.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-2/3">
      <p className={cx("text-gray-700", typography.h4)}>{title}</p>
      <br />

      <div className="flex">
        <div className="flex">
          {renderStar(starRs.fullStars, TiStarFullOutline)}
          {renderStar(starRs.halfStars, TiStarHalfOutline)}
          {renderStar(starRs.noneStars, TiStarOutline)}
        </div>
        <p className="ml-4 text-purple-700">( {commentCount} comments )</p>
      </div>
      <br />

      <p className={cx("text-orange-500", typography.h3)}>Price: {formatMoney(price)}</p>
      <br />

      <div>
        {descConv.map((v, i) => (
          <p key={i} className="mb-2 text-gray-600">
            - {v}
          </p>
        ))}
      </div>
      {renderAddToCart()}
    </div>
  )
}
