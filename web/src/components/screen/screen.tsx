import React from "react"

interface ScreenProps {
  className?: string
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const { children, className } = props
  const cn = "min-h-screen py-24 px-32 " + className
  return <div className={cn}>{children}</div>
}
