import React from "react"
import { typography } from "theme"
import cx from "classnames"
import { Review } from "./Review"
import { Divider, Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { Paths } from "router"

interface ReviewsProps {
  productId: string
  reviews: API.ReviewResponse[]
}

export const Reviews: React.FC<ReviewsProps> = (props) => {
  const { reviews, productId } = props
  const history = useHistory()
  const handleNavitateWriteReview = () => {
    history.push(Paths.rateProduct + productId)
  }
  return (
    <div className="py-8">
      <p className={cx("", typography.h4)}>Reviews of customer:</p>
      <div className="px-8 px-12 my-8 shadow-card">
        {reviews?.map((v, i) => {
          return (
            <>
              <Review key={v.id} review={v} />
              {i !== reviews.length - 1 && <Divider />}
            </>
          )
        })}

        {reviews.length <= 0 && (
          <p className="py-12 mx-8 my-8 text-3xl text-center">There has no review yet!</p>
        )}

        <br />
        <div className="flex justify-center w-full">
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleNavitateWriteReview()}
            className={"!mx-auto !mb-8 self-center"}
          >
            Write your own
          </Button>
        </div>
      </div>
    </div>
  )
}
