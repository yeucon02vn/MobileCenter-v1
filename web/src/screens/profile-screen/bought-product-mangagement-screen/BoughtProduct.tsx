import { Button } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import { ImageWithFetch } from "components"
import React from "react"
import { useHistory } from "react-router-dom"
import { Paths } from "router"
import { useGetProduct } from "services/apis"

const TextSke = () => (
  <>
    <Skeleton variant="text" className={"w-full mb-8"} />
    <Skeleton variant="text" className={"w-full mb-16"} />
    <Skeleton variant="rect" className="self-center w-48 h-48 m-auto" />
  </>
)

interface BoughtProductProps {
  product: API.BoughtProductInfo
}

export const BoughtProduct: React.FC<BoughtProductProps> = (props) => {
  const { product } = props
  const history = useHistory()
  const { productId } = product
  const { data, isLoading } = useGetProduct(productId)
  if (isLoading) return null
  const { thumbnailId, productName: title } = data
  // const thumbnailUrl =
  // "https://picsum.photos/350/" + (Math.floor(Math.random() * 350) + 300).toString()

  return (
    <div
      className="p-4 mx-8 mb-24 card"
      onClick={() => history.push(Paths.productDetail + productId)}
    >
      <div className={"m-auto"}>
        <ImageWithFetch
          imgId={thumbnailId}
          style={{
            width: 255,
          }}
        />
      </div>
      <div className={"pb-8 px-4"}>
        {isLoading ? (
          <TextSke />
        ) : (
          <>
            <p className={"my-4 mx-auto text-center"}>{title}</p>
            <Button variant="contained" color="primary" fullWidth className="my-2 !py-1 mx-auto">
              Write review
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
