import React from "react"
import { AppInput } from "components"
import cx from "classnames"


export default {
  title: "AppInput",
  component: AppInput,
}

export const Normal = () => (
  <div className="p-8">
    <AppInput />
  </div>
)
