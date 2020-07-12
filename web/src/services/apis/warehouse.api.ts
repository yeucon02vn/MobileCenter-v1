import { AppAPI } from "services/api-config"

const BASE_END_POINT = "Warehouse/"

const detailUrls = {
  get: "get-quantity",
}

Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
  return key
})
export const getProductQuantity = async (_: string, id: string) => {
  const url = `${detailUrls.get}?productId=${id}`
  return await AppAPI.get(url)
}
