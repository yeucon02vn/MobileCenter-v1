import { Screen, EmptyScreen } from "components"
import moment from "moment"
import React from "react"
import { images, typography } from "theme"
import { ReviewItem } from "./ReviewItem"

// const reviews: Review[] = [
// {
// id: v4(),
// date: "Tue Aug 16 2020 01:57:09 GMT+0700 (Indochina Time)",
// detail: "This greate one I ever had",
// rating: 5,
// productId: "f44971b2-a0ed-46f2-b290-d9ed7f2b066c",
// },
// {
// id: v4(),
// date: "Tue Aug 10 2020 03:58:36 GMT+0700 (Indochina Time)",
// detail:
// "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
// rating: 4,
// productId: "049c8afd-3649-46b8-ac1e-9d55aafdce92",
// },
// {
// id: v4(),
// date: "Wed Jul 30 2020 16:42:51 GMT+0700 (Indochina Time)",
// detail: "Lorem ipsum dolor sit ame",
// rating: 4,
// productId: "9dcd53fd-3e9b-401c-9f75-8dbfd0174fd9",
// },
// ]

const reviews = []

const sortedReview = reviews.sort((a, b) =>
  Math.abs(moment.utc(moment(a.date)).diff(moment.utc(moment(b.date)))),
)

interface MyReivewScreenProps {}

export const MyReivewScreen: React.FC<MyReivewScreenProps> = (props) => {
  console.log("sortedReview", sortedReview)
  if (sortedReview.length <= 0) return <EmptyScreen />
  return (
    <Screen className="w-full pt-0">
      {reviews.map((v) => (
        <ReviewItem review={v} key={v.id} />
      ))}
    </Screen>
  )
}
