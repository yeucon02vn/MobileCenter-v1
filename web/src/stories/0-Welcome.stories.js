import React from "react"
import { linkTo } from "@storybook/addon-links"
import { Welcome } from "@storybook/react/demo"
import "App.scss"
import "../styles/index.scss"

export default {
  title: "Welcome",
  component: Welcome,
}

export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />

ToStorybook.story = {
  name: "to Storybook",
}
