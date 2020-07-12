import Skeleton from "@material-ui/lab/Skeleton"
import { useSnackbar } from "notistack"
import React from "react"
import { Star } from "react-feather"
import { useMutation } from "react-query"
import { addLovedProduct } from "services/apis"
import { formatMoney } from "utils"

interface LoadingContentProps {}

const LoadingContent: React.FC<LoadingContentProps> = () => (
  <>
    <Skeleton variant="text" />
    <Skeleton variant="text" className="w-32" />
    <Skeleton variant="text" />
  </>
)

interface ProductContentProps {
  loading: boolean
  product: API.ProductData
}

export const ProductContent: React.FC<ProductContentProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar()
  const { loading, product } = props
  const { productName, price, rate: rating } = product
  const commentCount = 10
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
  return (
    <div className="px-8 pb-8">
      {loading ? (
        <LoadingContent />
      ) : (
        <div className="break-words">
          <p className="text-base text-gray-600">{productName}</p>

          <p className="my-4 font-sans text-2xl font-bold text-gray-800">{formatMoney(price)}</p>

          <div className="flex items-center justify-between">
            <div className="flex">
              <Star className="text-gray-700" />
              <p className="px-2 text-gray-800">{rating}</p>
              <p className="px-4 text-gray-500"> {commentCount} comments</p>
            </div>
            <svg
              className="w-6 h-6 text-gray-500 fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={(e) => {
                // TODO: add to cart
                e.stopPropagation()
                // @ts-ignore
                muAddLoved(product.id)
              }}
            >
              <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
