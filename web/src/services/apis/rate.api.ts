import { useQuery } from "react-query"
import { axios, handleAxiosRes } from "services/api-config"

const BASE_END_POINT = "Rate/"

const detailUrls = {
  create: "insert-Rate",
  getByProductId: "get-rate-by-product-id",
  getByUser: "get-reviews-by-user",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})

export const getReviewById = async (_: string, id: string): Promise<API.ReviewResponse[]> => {
  const rs = await axios.get(detailUrls.getByProductId, {
    params: {
      id,
    },
  })

  return handleAxiosRes(rs)
}

export const useQueryGetReviewById = (id) => {
  return useQuery(["getRateById", id], getReviewById)
}

export const createReview = async ({ data, productId }) => {
  const rs = await axios({
    url: detailUrls.create,
    method: "POST",
    data,
    params: {
      productId,
    },
  })

  return handleAxiosRes(rs)
}

export const getReviewsByUser = async (pageNumber = 1): Promise<API.ReviewByUserResponse> => {
  const rs = await axios({
    url: detailUrls.getByUser,
    params: {
      pageSize: 10,
      pageNumber,
    },
  })

  return handleAxiosRes(rs)
}
