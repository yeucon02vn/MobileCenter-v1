import React from "react"
import cx from "classnames"

interface AppCardProps {
  className?: string
}

export const AppCard: React.FC<AppCardProps> = (props) => {
  const { children, className } = props

  return (
    <div className={cx("bg-white-alabaster rounded-2xl px-12 py-8", className)}>{children}</div>
  )
}
