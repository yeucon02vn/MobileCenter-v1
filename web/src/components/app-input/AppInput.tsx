import React from "react"
import cx from "classnames"

interface AppInputProps {
  className?: string
  label?: string
  register: any
  registerOption: object
  textClass?: string
  type?: string
  [rest: string]: any
}

export const AppInput: React.FC<AppInputProps> = ({
  className,
  label,
  register,
  registerOption,
  textClass,
  type,
  ...rest
}) => {
  return (
    <div className={cx("text-gray-600", className)}>
      <p className="text-gray-600 ml-2 mb-3">{label}</p>
      <input
        {...rest}
        ref={register({ ...registerOption })}
        type={type}
        className={cx(
          "border rounded-lg bg-white-alabaster text-center outline-none p-2 focus:bg-white focus:shadow-card focus:text-gray-800 w-88",
          textClass,
        )}
      />
    </div>
  )
}

AppInput.defaultProps = {
  type: "text",
}
