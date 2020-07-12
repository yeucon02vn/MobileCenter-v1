import React from "react"
import cx from "classnames"

interface TextWithIconProps {
  className?: string
  Icon: React.ElementType
  text: string
  textClass?: string
  iconClass?: string
  disabled?: boolean
  register: any // hook form register
  required?: boolean
  registerOption?: object
  formName?: string
  [rest: string]: any
}

export const TextInputWithIcon: React.FC<TextWithIconProps> = ({
  className,
  Icon,
  text,
  textClass,
  iconClass,
  disabled,
  register,
  required,
  registerOption,
  formName,
}) => {
  return (
    <div className={cx("flex text-gray-800 items-center", className)}>
      <Icon className={cx("text-purple-500 mr-3", iconClass)} />
      <input
        disabled={disabled}
        name={formName}
        className={cx("bg-transparent outline-none ", {
          "border-b border-gray-300 pb-1 focus:border-primary": !disabled,
        })}
        ref={register({ required, ...registerOption })}
      />
    </div>
  )
}
