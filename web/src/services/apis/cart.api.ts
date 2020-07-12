import { useQuery } from "react-query"
import { AppAPI } from "services/api-config"

const BASE_END_POINT = "Cart/"

const detailUrls = {
  getCart: "get-all",
  add: "add-product",
  countItems: "count-items",
  delete: "DeleteProduct",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})

export const getCart = async (): Promise<API.CartResponse> => {
  return await AppAPI.get(detailUrls.getCart)
}

export const useQueryGetCart = () => {
  return useQuery("carts", getCart)
}
export const getCartItemsLength = async (): Promise<number> => {
  return await AppAPI.get(detailUrls.countItems)
}

export const useQueryGetCartItemLength = () => {
  return useQuery("carts", getCartItemsLength)
}

export const addCart = async (product: API.Cart) => {
  return await AppAPI.post(detailUrls.add, product)
}

export const deleteCartProduct = async (id: string) => {
  return await AppAPI.delete(`${detailUrls.delete}?productID=${id}`)
}
