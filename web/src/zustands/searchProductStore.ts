import { queryCache } from "react-query"
import { productsUrl } from "services/apis"
import { delay, immer, persist } from "utils"
import create from "zustand"

interface SearchState {
  query: string
  keyword: string
  setQuery: (v: string) => void
  setKeyword: (v: string) => void
  clearQuery: () => void
}

const defaultQuery = productsUrl.getProducts

export const [useSearchProductsStore] = create<SearchState>(
  persist("searchProductsStore")(
    immer((set: any, get: any) => ({
      query: defaultQuery,
      keyword: "",
      setKeyword: (v) => {
        set((s) => {
          s.keyword = v
        })
      },
      setQuery: (v) => {
        set((state) => {
          state.query = v
        })
      },
      clearQuery: () => {
        set((s) => {
          s.query = defaultQuery
          s.keyword = ""
        })
        delay(100).then(() => {
          queryCache.invalidateQueries("getAllProducts")
        })
      },
    })),
  ),
)
