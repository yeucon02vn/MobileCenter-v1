import React from "react"
import { Header, SearchBar } from "components"

export default {
  title: "Header",
  component: Header,
}

export const Searchbar = () => (
  <div className="p-8">
    <SearchBar />
  </div>
)
