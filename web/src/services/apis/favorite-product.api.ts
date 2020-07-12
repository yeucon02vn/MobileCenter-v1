import { useQuery } from "react-query"
import { AppAPI } from "services/api-config"

const BASE_END_POINT = "Favorite/"

const detailUrls = {
  getAll: "GetId",
  delete: "DeleteProduct",
  add: "InsertProductId",
  editAmount: "Update-Amount-in-Cart",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})
const getAllFavoriteProducts = async (): Promise<API.FavoriteResponse> => {
  return await AppAPI.get(detailUrls.getAll)
}

export const useQueryGetFavoriteProducts = () => {
  return useQuery("favorites", getAllFavoriteProducts)
}

export const deleteFavoriteProduct = async (id: string) => {
  return await AppAPI.delete(`${detailUrls.delete}?productId=${id}`)
}

export const addLovedProduct = async (id: string) => {
  return await AppAPI.post(`${detailUrls.add}?productId=${id}`)
}

export const editAmount = async (id: string, amount: number) => {
  return await AppAPI.post(`${detailUrls}?productId=${id}&amount=${amount}`)
}
