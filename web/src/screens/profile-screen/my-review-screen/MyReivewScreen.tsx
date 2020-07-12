import { EmptyScreen, Screen, AppLoading } from "components"
import moment from "moment"
import React, { useMemo } from "react"
import { ReviewItem } from "./ReviewItem"
import { useInfiniteQuery } from "react-query"
import { getReviewsByUser } from "services/apis/rate.api"
import { Button } from "@material-ui/core"

interface MyReivewScreenProps {}

export const MyReivewScreen: React.FC<MyReivewScreenProps> = (props) => {
  const { isLoading, data, fetchMore, isFetchingMore, canFetchMore } = useInfiniteQuery<
    API.ReviewByUserResponse,
    any,
    any
  >(
    "getAllProducts",
    async (key, nextId = 0) => {
      const data = await getReviewsByUser()
      return data
    },
    {
      getFetchMore: (lastGroup) => {
        if (!lastGroup?.pagination?.hasNext) return false
        return (lastGroup?.pagination?.currentPage || 1) + 1
      },
    },
  )

  if (isLoading) return <AppLoading />

  if (data.length <= 0) return <EmptyScreen />

  return (
    <Screen className="w-full pt-0">
      {data?.map((v) =>
        v.items?.map((review) => {
          return <ReviewItem review={review} key={review.id} />
        }),
      )}
      {data ? (
        <div className="flex justify-center w-full mt-8">
          <Button
            variant="contained"
            className="m-auto !outline-none"
            // onClick={() => fetchData()}
            onClick={() => fetchMore()}
            disabled={!canFetchMore}
          >
            {isFetchingMore
              ? "Loading more..."
              : canFetchMore
              ? "Load More"
              : "There is no more to fetch"}
          </Button>
        </div>
      ) : (
        <div className="min-h"></div>
      )}
    </Screen>
  )
}
