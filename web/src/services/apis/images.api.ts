import { useQuery } from "react-query"
import { AppAPI } from "services/api-config"

const BASE_END_POINT = "Imgs"

const detailUrls = {
  getImg: "",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})

export const getImg = async (_, id: string): Promise<string> => {
  const data: any = await AppAPI.get(`${detailUrls.getImg}?id=${id}`)
  return data
}
export const useGetImg = (id: string) => {
  return useQuery(["getImgs", id], getImg)
}
