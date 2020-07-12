import { useInfiniteQuery, useQuery } from "react-query"
import { AppAPI, axios } from "services/api-config"

const BASE_END_POINT = "Products/"

const detailUrls = {
  getProducts: "get-all-for-user",
  getProduct: "get",
  getProductsByIds: "get-products-with-id",
  getByProvider: "Get-With-Provider",
  getByRate: "Get-With-Rate",
  getByPrice: "Get-With-Range-Price",
  getByDiscount: "Get-With-Higher-Discount",
  getByTags: "filter-with-tag",
  update: "update",
  search: "search",
  getHotTags: "get-hot-tags",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})

export const productsUrl = detailUrls

// export const getProductGeneral = ({ page }: { page?: number }) =>
// fetch(`${detailUrls.getGeneral}?pageNumber=${page || 0}&pageSize=10`)

export const getProductsGeneral = async (cursor = 1) => {
  const data: any = await AppAPI.get(
    `${detailUrls.getProducts}?pageNumber=${cursor || 0}&pageSize=10`,
  )
  return data
}

export const getProduct = async (_, id: string): Promise<API.ProductData> => {
  const data: any = await AppAPI.get(`${detailUrls.getProduct}/${id}`)
  return data
}

export const useGetProducts = () => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "products",
    async (key, nextId = 0) => {
      const data = await getProductsGeneral(nextId)
      return data
    },
    {
      getFetchMore: (lastGroup) => {
        if (!lastGroup?.pagination?.hasNext) return false
        return (lastGroup?.pagination?.currentPage || 1) + 1
      },
    },
  )
}

export const useGetProduct = (id: string) => {
  return useQuery(["getProductById", id], getProduct)
}

export const getProductsByIds = async (_, ids: string[]): Promise<API.ProductData[]> => {
  let params = ""
  ids.forEach((v, i) => {
    if (i !== 0) params += "&"
    params += `ids=${v}`
  })
  return await AppAPI.get(`${detailUrls.getProductsByIds}?${params}`)
}

export const useGetProductsByIdsQuery = (ids: string[]) => {
  return useQuery(["getProductsByIds", ids], getProductsByIds)
}

export const useQueryGetProductsByProvider = (providerName: string) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByProvider",
    async (key, nextId = 0) => {
      const data = await AppAPI.get(
        `${detailUrls.getByProvider}/${providerName}?pageSize=10&pageNumber=${nextId}`,
      )
      return data
    },
    {
      getFetchMore: (lastGroup) => {
        if (!lastGroup?.pagination?.hasNext) return false
        return (lastGroup?.pagination?.currentPage || 1) + 1
      },
      initialData: [],
      enabled: !!providerName,
    },
  )
}

export const useQueryGetProductsByRate = (rate: number) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByRate",
    async (key, nextId = 1) => {
      const url = `${detailUrls.getByRate}/${rate}?pageSize=10&pageNumber=${nextId}`
      const data = await AppAPI.get(url)
      // const data = await AppAPI.get(
      // `${detailUrls.getByProvider}/Wolsen?pageSize=10&pageNumber=${nextId}`,
      // )
      return data
    },
    {
      getFetchMore: (lastGroup) => {
        if (!lastGroup?.pagination?.hasNext) return false
        return (lastGroup?.pagination?.currentPage || 1) + 1
      },
      initialData: [],
      enabled: !!rate,
    },
  )
}
export const useQueryGetProductsByDiscount = (discount: number) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByDiscount",
    async (key, nextId = 1) => {
      const url = `${detailUrls.getByDiscount}/${discount}?pageSize=10&pageNumber=${nextId}`
      const data = await AppAPI.get(url)
      return data
    },
    {
      getFetchMore: (lastGroup) => {
        if (!lastGroup?.pagination?.hasNext) return false
        return (lastGroup?.pagination?.currentPage || 1) + 1
      },
      initialData: [],
      enabled: !!discount,
    },
  )
}

export const useQueryGetProductsByPrice = (min: number, max: number) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByPrice",
    async (key, nextId = 1) => {
      const url = `${detailUrls.getByPrice}?fromPrice=${min}&toPrice=${max}&pageSize=10&pageNumber=${nextId}`
      const data = await AppAPI.get(url)
      return data
    },
    {
      getFetchMore: (lastGroup) => {
        if (!lastGroup?.pagination?.hasNext) return false
        return (lastGroup?.pagination?.currentPage || 1) + 1
      },
      initialData: [],
      enabled: !!min && !!max,
    },
  )
}

export const updateProduct = async (input: API.ProductEditInput) => {
  let questions = ""
  let tags = ""
  input!.upPro!.info!.tagName!.forEach((v, i) => {
    tags += `&upProduct.Info.TagName=${v}`
  })

  let descriptions = ""
  const arrDesc = input!.upPro!.descriptions!.split("\n")
  arrDesc.forEach((v, i) => {
    descriptions += `&upProduct.Info.Descriptions=${v || "null"}`
  })

  input.upPro.questions.forEach((v) => (questions += `&upProduct.Questions=${v}`))
  const params = `productId=${input?.upPro.id}&upProduct.ProductName=${input.upPro.productName}&upProduct.Price=${input.upPro.price}&upProduct.Provider=${input.upPro.provider}&upProduct.Rate=${input.upPro.rate}&upProduct.Discount=${input.upPro.discount}${questions}${tags}${descriptions}&isDeleted=${input.upPro.isDeleted}`
  const url = `${detailUrls.update}?${params}`
  return await axios({
    method: "post",
    url,
    data: input.replaceThumb,
    headers: { "Content-Type": "multipart/form-data" },
  })
}

export const searchProducts = async (_: any, query: string): Promise<API.ProductsResponseData> => {
  const url = `${detailUrls.search}/${query}`
  return await AppAPI.get(url)
}

export const getHotTags = async (): Promise<string[]> => {
  return await AppAPI.get(detailUrls.getHotTags)
}
export const useQueryGetHotTags = () => {
  return useQuery("getHotTags", getHotTags)
}
