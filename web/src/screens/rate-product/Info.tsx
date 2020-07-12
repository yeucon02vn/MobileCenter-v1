import React from "react"
import { ImageWithFetch } from "components"
import { useHistory } from "react-router-dom"
import { Paths } from "router"

interface InfoProps {
  product: API.ProductData
}

export const Info: React.FC<InfoProps> = (props) => {
  const { product } = props
  const history = useHistory()
  return (
    <div
      className="flex-1 cursor-pointer"
      onClick={() => history.push(Paths.productDetail + product.id)}
    >
      <div className="flex">
        <ImageWithFetch
          alt="img"
          imgId={product?.thumbnailId}
          className="mr-8"
          style={{ width: 200 }}
        />

        <div>
          <p className="m-4 text-xl">{product?.productName}</p>
          <p className="m-4 text-gray-500">Provider: {product.provider}</p>
        </div>
      </div>
    </div>
  )
}
