import { useQuery } from "react-query"
import { AppAPI } from "services/api-config"

const BASE_END_POINT = "Order/"

const detailUrls = {
  create: "create",
  get: "get-list-orders",
  getProducts: "get-list-bought-products",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})

export const placeOrder = async (data: API.OrderInput) => {
  console.log("data", data)
  return await AppAPI.post(detailUrls.create, data)
}

export const getMyOrders = async (): Promise<API.GetListOrders[]> => {
  return await AppAPI.get(detailUrls.get)
}

export const useQueryGetMyOrders = () => {
  return useQuery("getListOrders", getMyOrders)
}

export const getMyBoughtProducts = async (): Promise<API.GetListBoughtProductResponse> => {
  return await AppAPI.get(detailUrls.getProducts)
}

export const useQueryGetBoughtProducts = () => {
  return useQuery("getListBoughtProducts", getMyBoughtProducts)
}
