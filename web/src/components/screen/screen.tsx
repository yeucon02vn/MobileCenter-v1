import React from "react"

interface ScreenProps {
  className?: string
  [rest: string]: any
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const { children, className, ...rest } = props
  const cn = "min-h-screen py-24 px-32 " + className
  return (
    <div className={cn} {...rest}>
      {children}
    </div>
  )
}
