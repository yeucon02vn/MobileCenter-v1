import moment, { Moment } from "moment"
import React from "react"
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { useHistory } from "react-router-dom"
// import { ProductsSample } from "screens/home-screen/home-screen"
import { calcRating, strings } from "utils"
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

interface ReviewItemProps {
  review: API.ReviewByUser
}

export const ReviewItem: React.FC<ReviewItemProps> = (props) => {
  const history = useHistory()
  const { review } = props
  const { productInfo, rate, id } = review
  // const { rating, date, detail, productId } = review
  // const products = ProductsSample.filter((v) => v.id === productId)

  if (!productInfo) return null
  const { thumbnailId, productName: title, id: productId } = productInfo || {}
  const starRs = calcRating(rate.valueRating)
  return (
    <div
      className="flex p-12 my-8 card card-zoom"
      onClick={(id) => history.push(process.env.PUBLIC_URL + "/product/" + productId)}
    >
      <ImageWithFetch imgId={thumbnailId} alt="thumbnailUrl" className={"mr-20 w-48"} />
      <div className="w-full py-2 text-gray-700">
        <p className="text-2xl text-indigo-500">{title}</p>

        <div className="my-8">
          <div className="flex ">
            {renderStar(starRs.fullStars, TiStarFullOutline)}
            {renderStar(starRs.halfStars, TiStarHalfOutline)}
            {renderStar(starRs.noneStars, TiStarOutline)}
            <p className="ml-4 text-gray-500">{rate.valueRating}</p>
          </div>
        </div>

        <div>
          <p className="text-2xl">{rate.title}</p>
          <br />

          <p className="text-xl text-gray-600">{rate.description}</p>
        </div>
      </div>
    </div>
  )
}
