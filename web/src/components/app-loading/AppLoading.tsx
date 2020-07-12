import React from "react"
import cx from "classnames"

interface AppLoadingProps {
  className?: string
}

export const AppLoading: React.FC<AppLoadingProps> = ({ className }) => {
  return <div className={cx("min-h-screen", className)}>Loading....</div>
}
