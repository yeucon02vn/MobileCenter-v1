import React from "react"
import { AppCard } from "components"

export default {
  title: "AppCard",
  component: AppCard,
}

export const Normal = () => (
  <div className="p-8">
    <AppCard>
      <p className="text-3xl text-gray-700">shipping info</p>
      <p className="text-3xl text-gray-700">shipping info</p>
      <p className="text-3xl text-gray-700">shipping info</p>
      <p className="text-3xl text-gray-700">shipping info</p>
    </AppCard>
  </div>
)
