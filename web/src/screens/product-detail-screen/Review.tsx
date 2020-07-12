import { Avatar } from "@material-ui/core"
import React from "react"
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { calcRating } from "utils"
import { renderStar } from "./components/ProductInfo"

interface ReviewProps {
  review: API.ReviewResponse
}

export const Review: React.FC<ReviewProps> = (props) => {
  const { review } = props
  const { id, rate, userInfo } = review
  const { name } = userInfo
  const starRs = calcRating(rate?.valueRating)
  return (
    <div className="flex px-4 py-8 ">
      <div className={"items-center mr-8"}>
        <Avatar className={"mx-auto"} />
        <br />
        <p className="text-gray-700">{name}</p>
      </div>

      <div>
        <div className="flex mb-4">
          <div className="flex mr-4">
            {renderStar(starRs.fullStars, TiStarFullOutline)}
            {renderStar(starRs.halfStars, TiStarHalfOutline)}
            {renderStar(starRs.noneStars, TiStarOutline)}
          </div>

          <div className="text-indigo-500">{rate.title}</div>
        </div>

        <div>
          <p className="text-gray-600">{rate?.description}</p>
        </div>
      </div>
    </div>
  )
}
