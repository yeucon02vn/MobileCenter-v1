import { axios, handleAxiosRes } from "services/api-config"

const BASE_END_POINT = "Feedbacks/"

const detailUrls = {
  create: "create",
}

Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
  return key
})

interface FeedbackInput {
  email: string
  title: string
  description: string
  orderId: string
}

export const createFeedback = async (input: FeedbackInput): Promise<API.Feedback> => {
  const rs = await axios({
    method: "POST",
    url: detailUrls.create,
    data: input,
  })
  return handleAxiosRes(rs)
}
