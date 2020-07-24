import { Button } from "@material-ui/core"
import cx from "classnames"
import { CategorySidebar, ProductItem, Screen } from "components"
import React, { useState, useCallback, useMemo } from "react"
import { queryCache, useInfiniteQuery } from "react-query"
import ScrollMenu from "react-horizontal-scrolling-menu"
import { useHistory } from "react-router-dom"
import StackGrid from "react-stack-grid"
import { Paths } from "router"
import { AppAPI } from "services/api-config"
import { productsUrl, useQueryGetHotTags } from "services/apis"
import { formatMoney } from "utils"
import { useCartStore, useSearchProductsStore } from "zustands"

// One item component
// selected prop will be passed
const ALL_ITEM = "All"
const TagItem = ({ text, selected }) => {
  return (
    <button
      className={cx(
        "rounded-lg bg-gray-100 border-gray-700 p-2 px-6 border mr-8 text-gray-700 !outline-none focus:outline-none",
        {
          "!text-white !bg-gray-700": selected,
        },
      )}
    >
      {text}
    </button>
  )
}

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el

    return <TagItem text={name} key={name} selected={selected} />
  })

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>
}

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" })
const ArrowRight = Arrow({ text: ">", className: "arrow-next" })

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const history = useHistory()
  const { query, setQuery, keyword, clearQuery } = useSearchProductsStore()
  const { data: tagsInput } = useQueryGetHotTags()
  const tags = useMemo(() => {
    if (tagsInput) return [ALL_ITEM, ...tagsInput]
    return []
  }, [tagsInput])

  const { updateLength } = useCartStore()
  const [filter, setFilterState] = useState<any>({})
  const [menu, setMenu] = React.useState(undefined)
  const [selectedTag, setSelectedTag] = React.useState(ALL_ITEM)

  const { data, fetchMore, isFetchingMore, canFetchMore } = useInfiniteQuery<
    API.ProductsResponseData,
    any,
    any
  >(
    "getAllProducts",
    async (key, nextId = 0) => {
      let url = ""
      if (query === productsUrl.getProducts) url = `${query}?pageNumber=${nextId || 1}&pageSize=10`
      else url = `${query}pageSize=10&pageNumber=${nextId || 1}`

      const data = await AppAPI.get(url)
      console.log("data", data)
      return data
    },
    {
      getFetchMore: (lastGroup) => {
        if (!lastGroup?.pagination?.hasNext) return false
        return (lastGroup?.pagination?.currentPage || 1) + 1
      },
    },
  )

  React.useEffect(() => {
    updateLength()
  }, [updateLength])

  React.useEffect(() => {
    if (selectedTag !== ALL_ITEM) {
      const query = `${productsUrl.getByTags}?tagName=${selectedTag}`
      setQuery(query)
    } else clearQuery()
  }, [selectedTag])

  React.useEffect(() => {
    const f = filter
    if (f.provider) {
      const query = `${productsUrl.getByProvider}/${f.provider}?`
      setQuery(query)
    } else if (f.rate !== undefined) {
      const query = `${productsUrl.getByRate}/${f.rate}?`
      setQuery(query)
    } else if (f.minPrice !== undefined && f.maxPrice !== undefined) {
      const query = `${productsUrl.getByPrice}?fromPrice=${f.minPrice}&toPrice=${f.maxPrice}&`
      setQuery(query)
    } else if (f.discount !== undefined) {
      const query = `${productsUrl.getByDiscount}/${f.discount}?`
      setQuery(query)
    }
  }, [filter, setQuery])

  React.useEffect(() => {
    queryCache.invalidateQueries("getAllProducts")
  }, [query])

  const setFilter = (f) => {
    setFilterState(f)
  }

  /* ------------- methods ------------- */
  const onSelectTag = (v) => {
    setSelectedTag(v)
  }

  /* ------------- renders ------------- */
  const renderSelectedTags = () => {
    let resultLength = 0
    let resultName = ""
    if (keyword !== "") resultName = keyword
    else if (filter.provider) resultName = filter.provider
    else if (filter.rate !== undefined) resultName = filter.rate + " stars"
    else if (filter.minPrice !== undefined && filter.maxPrice !== undefined)
      resultName = `From ${formatMoney(filter.minPrice)} to ${formatMoney(filter.maxPrice)}`
    else if (filter.discount !== undefined) resultName = `${filter.discount * 100}% or more`

    resultLength = data && data[0] ? data[0].pagination?.totalCount : 0
    return (
      <div className="pl-48 my-12">
        <div className={"flex items-center"}>
          <p className="mr-12">
            {resultLength} results for : {resultName}
          </p>
          <Button
            onClick={() => {
              setFilter({})
              clearQuery()
            }}
          >
            Clear
          </Button>
        </div>
      </div>
    )
  }

  const getMenu = (list, selected) =>
    list.map((el) => {
      return <TagItem text={el} key={el} selected={selected} />
    })

  const renderHotTags = () => {
    if (!tags) return null
    return (
      <div
        className="pl-48 my-12"
        style={{
          maxWidth: 1500,
        }}
      >
        <ScrollMenu
          data={getMenu(tags, selectedTag)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selectedTag}
          onSelect={onSelectTag}
        />
      </div>
    )
  }

  const renderTags = () => {
    if (
      !filter.provider &&
      filter.rate === undefined &&
      filter.minPrice === undefined &&
      filter.maxPrice === undefined &&
      filter.discount === undefined &&
      keyword === ""
    )
      return renderHotTags()

    return renderSelectedTags()
  }

  return (
    <div className="flex">
      <CategorySidebar setFilter={setFilter} />
      <div className="w-full">
        {renderTags()}
        <Screen
          className={cx("pl-16 pr-24", {
            "!pt-0": true,
          })}
        >
          <StackGrid columnWidth={400} duration={0}>
            {data?.map((products) => {
              return products?.items?.map((v) => {
                return (
                  <ProductItem
                    product={v}
                    key={v.id}
                    className="mx-8 mb-24"
                    onClick={(id) => history.push(Paths.productDetail + id)}
                  />
                )
              })
            })}
          </StackGrid>
          {data ? (
            <div className="flex justify-center w-full mt-8">
              <Button
                variant="contained"
                className="m-auto !outline-none"
                // onClick={() => fetchData()}
                onClick={() => fetchMore()}
                disabled={!canFetchMore}
              >
                {isFetchingMore
                  ? "Loading more..."
                  : canFetchMore
                  ? "Load More"
                  : "There is no more to fetch"}
              </Button>
            </div>
          ) : (
            <div className="min-h"></div>
          )}
        </Screen>
      </div>
    </div>
  )
}
