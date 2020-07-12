import { createStyles, makeStyles } from "@material-ui/core"
import { ImageWithFetch } from "components"
import { useSnackbar } from "notistack"
import React from "react"
import { queryCache, useMutation } from "react-query"
import { addCart, deleteFavoriteProduct, useGetProduct } from "services/apis"
import { metrics, typography } from "theme"
import { formatMoney } from "utils"

const useStyles = makeStyles(() =>
  createStyles({
    thumbnail: {
      width: metrics.img.xsm,
      height: metrics.img.xsm,
    },
  }),
)

export interface OrderSavedItem {
  productId: string
}

interface OrderSavedItemProps extends OrderSavedItem {}

export const OrderSavedItem: React.FC<OrderSavedItemProps> = (props) => {
  const { productId } = props

  const { enqueueSnackbar } = useSnackbar()
  const { data, isFetching } = useGetProduct(productId)
  const onError = (e: React.ReactNode) => {
    enqueueSnackbar(e, { variant: "warning" })
  }
  const onSuccess = () => {
    enqueueSnackbar("Remove successfully!")
    queryCache.invalidateQueries("favorites")
  }

  const [muDelete] = useMutation(deleteFavoriteProduct, {
    onError,
    onSuccess,
  })
  const [muAddToCart] = useMutation(addCart, {
    onError,
    onSuccess() {
      queryCache.invalidateQueries("getProductById")
      enqueueSnackbar("Add successfully!")
    },
  })
  const classes = useStyles()

  const isLoading = isFetching
  if (isLoading) return <div>Loading...</div>

  const { thumbnailId, productName: title, provider, price } = data
  return (
    <div className="flex my-8">
      <div>
        <ImageWithFetch imgId={thumbnailId} alt="thumbnailUrl" className={classes.thumbnail} />
      </div>
      <div className="px-16 ">
        <p className="text-gray-800">{title}</p>
        <br />
        <p className="text-gray-500">Provide by: {provider}</p>
        <br />
        <p className={typography.h5}>{formatMoney(price)}</p>
        <br />
        <div className="flex">
          <p
            className="mr-4 text-purple-700 cursor-pointer"
            onClick={() => muAddToCart({ productId, amount: 1 })}
          >
            Add
          </p>
          <p className="text-orange-500 cursor-pointer" onClick={() => muDelete(productId)}>
            Remove
          </p>
        </div>
      </div>
    </div>
  )
}
