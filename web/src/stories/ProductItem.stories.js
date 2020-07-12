import React from "react"
import { ProductItem } from "components"

export default {
  title: "ProductItem",
  component: ProductItem,
}

export const Normal = () => (
  <div className="p-8">
    <ProductItem />
  </div>
)
