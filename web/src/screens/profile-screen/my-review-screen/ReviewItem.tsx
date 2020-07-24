import moment, { Moment } from "moment"
import React from "react"
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { useHistory } from "react-router-dom"
// import { ProductsSample } from "screens/home-screen/home-screen"
import { calcRating, strings } from "utils"

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

export interface Review {
  id: string
  date: string | Moment | Date
  rating: number
  detail: string
  productId: string
}

interface ReviewItemProps {
  review: Review
}

export const ReviewItem: React.FC<ReviewItemProps> = (props) => {
  const history = useHistory()
  const { review } = props
  const { rating, date, detail, productId } = review
  // const products = ProductsSample.filter((v) => v.id === productId)
  let product
  // if (products.length > 0) product = products[0]
  if (!product) return null

  const { thumbnailUrl, title } = product
  const starRs = calcRating(rating)
  return (
    <div
      className="flex p-12 my-8 card card-zoom"
      onClick={(id) => history.push(process.env.PUBLIC_URL + "/product/" + productId)}
    >
      <img src={thumbnailUrl} alt="thumbnailUrl" className={"mr-12 w-48"} />
      <div className="w-full py-2 text-gray-700">
        <p className="text-2xl text-indigo-500">{title}</p>

        <p className="text-gray-500 my-4">{moment(date).format(strings.dateTimeDisplay)}</p>

        <div className="my-8">
          <div className="flex ">
            {renderStar(starRs.fullStars, TiStarFullOutline)}
            {renderStar(starRs.halfStars, TiStarHalfOutline)}
            {renderStar(starRs.noneStars, TiStarOutline)}
            <p className="ml-4 text-gray-500">{rating}</p>
          </div>
        </div>

        <p className="text-xl">{detail}</p>
      </div>
    </div>
  )
}
