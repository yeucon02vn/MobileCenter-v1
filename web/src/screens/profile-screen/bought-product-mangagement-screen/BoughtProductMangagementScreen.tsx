import { Screen } from "components"
import React from "react"
import StackGrid from "react-stack-grid"
import { useQueryGetBoughtProducts } from "services/apis"
import { BoughtProduct } from "./BoughtProduct"

interface BoughtProductMangagementScreenProps {}

export const BoughtProductMangagementScreen: React.FC<BoughtProductMangagementScreenProps> = (
  props,
) => {
  const { data, isLoading } = useQueryGetBoughtProducts()
  if (isLoading) return null
  console.log("data", data)
  return (
    <Screen className="w-full pt-0 !px-20">
      <StackGrid columnWidth={350} duration={0}>
        {data?.carts?.map((v) => (
          <BoughtProduct product={v} key={v.productId} />
        ))}
      </StackGrid>
    </Screen>
  )
}
