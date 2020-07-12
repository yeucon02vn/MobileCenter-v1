import React from "react"
import { images, typography } from "theme"
import { Screen } from "../screen/screen"

interface EmptyScreenProps {
  className?: string
}

export const EmptyScreen: React.FC<EmptyScreenProps> = ({ className }) => {
  return (
    <Screen className="items-center w-full pt-0 text-center">
      <img src={images.empty} className="h-auto max-w-sm mx-auto" alt="images" />
      <div className="pt-8 ml-24">
        <br />

        <p className={typography.h3}>There are nothing here!</p>
      </div>
    </Screen>
  )
}
