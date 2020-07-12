import React from "react"
import { Screen } from "components"
import styled from "styled-components"
import { metrics, images } from "theme"

const StyledImg = styled.img`
  width: ${metrics.img.lg}px;
  height: auto;
`

interface PageNotFoundScreenProps {}

export const PageNotFoundScreen: React.FC<PageNotFoundScreenProps> = (props) => {
  return (
    <Screen className="flex ">
      <div className="inline-block mx-auto">
        <StyledImg src={images.pageNotFound} className="inline-block mx-auto" />
        <p className="text-center my-8">Page not found!</p>
      </div>
    </Screen>
  )
}
