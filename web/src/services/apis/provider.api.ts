import { AppAPI } from "services/api-config"
import { useQuery } from "react-query"
import { Provider } from "react"

const BASE_END_POINT = "Providers"
const detailUrls = {
  getAll: "",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})

export const getProviders = async (): Promise<API.Provider[]> => {
  return await AppAPI.get(`${detailUrls.getAll}`)
}

export const useGetProviders = () => {
  return useQuery(["providers"], getProviders)
}
