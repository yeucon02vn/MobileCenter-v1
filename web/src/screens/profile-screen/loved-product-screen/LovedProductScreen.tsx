import { Screen, AppLoading } from "components"
import React from "react"
import { useQueryGetFavoriteProducts } from "services/apis"
import { LovedItem } from "./LovedItem"

interface Props {}

export const LovedProductScreen: React.FC<Props> = (props) => {
  const { data, isFetching } = useQueryGetFavoriteProducts()
  const loading = isFetching
  if (loading) return <AppLoading />
  return (
    <Screen className="!pt-0 w-full">
      <p className="text-3xl font-bold">Loved products: </p>
      {data?.productId?.map((v) => (
        <LovedItem key={v} product={v} />
      ))}
    </Screen>
  )
}
