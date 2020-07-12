import { Close } from "@material-ui/icons"
import React from "react"
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { useHistory } from "react-router-dom"
import { calcRating, formatMoney } from "utils"
import { useGetProduct } from "services/apis"
import { ImageWithFetch } from "components"

const renderStar = (amount: number, Star: any) => {
  const list = new Array(amount).fill(0)
  return list.map((_, i) => {
    return (
      <div key={i}>
        <Star className="text-primary" />
      </div>
    )
  })
}

interface LovedItemProps {
  product: string
  // onClick: (id: string) => void
}

export const LovedItem: React.FC<LovedItemProps> = ({ product }) => {
  const { data, isFetching } = useGetProduct(product)
  const history = useHistory()

  if (isFetching) return null
  const { rate: rating, productName: title, price, thumbnailId } = data
  const commentCount = 10

  const starRs = calcRating(rating)
  return (
    <div
      className="flex p-12 my-8 card card-zoom"
      onClick={(id) => history.push(process.env.PUBLIC_URL + "/product/" + product)}
    >
      <ImageWithFetch
        imgId={thumbnailId}
        alt="thumbnailUrl"
        className={"mr-16 w-48"}
        style={{
          height: 200,
        }}
      />
      <div className="w-full py-2 ml-12 text-gray-700">
        <div className="flex items-center justify-between text-xl">
          <p className="text-2xl text-indigo-500">{title}</p>
          <div className="flex">
            <p className="mx-12 text-gray-600">{formatMoney(price)}</p>
            <Close className={"cursor-pointer"} />
          </div>
        </div>

        <div className="my-8">
          <div className="flex ">
            {renderStar(starRs.fullStars, TiStarFullOutline)}
            {renderStar(starRs.halfStars, TiStarHalfOutline)}
            {renderStar(starRs.noneStars, TiStarOutline)}
            <p className="ml-4 text-gray-500">{rating}</p>
          </div>

          <p className="my-4 text-purple-700 ">( {commentCount} comments )</p>
        </div>
      </div>
    </div>
  )
}
