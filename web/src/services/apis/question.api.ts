import { AppAPI } from "services/api-config"
import { useQuery } from "react-query"

const BASE_END_POINT = "Question/"
const detailUrl = {
  insert: "insert-Question",
  getQuestion: "get-question",
}

Object.keys(detailUrl).map((key) => {
  detailUrl[key] = BASE_END_POINT + detailUrl[key]
  return key
})

export const askQuestion = async (input: API.QuestionInput) => {
  return await AppAPI.post(detailUrl.insert, input)
}

export const getQuestions = async (_, productId: string): Promise<API.QuestionResponse> => {
  return await AppAPI.get(`${detailUrl.getQuestion}/${productId}`)
}

export const useQueryGetQuestions = (productId: string) => {
  return useQuery(["getQuestions", productId], getQuestions)
}
