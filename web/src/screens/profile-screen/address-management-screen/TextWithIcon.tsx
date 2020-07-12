import cx from "classnames"
import React from "react"

interface TextWithIconProps {
  Icon: React.ElementType
  text: string
  register: any
  edit?: boolean
}

export const TextWithIcon: React.FC<TextWithIconProps> = ({ Icon, text, register, edit }) => {
  return (
    <div className="flex items-center my-4">
      <Icon className="text-gray-600" />
      <input
        name="value"
        className={cx("text-gray-700 ml-4 outline-none w-96 py-1", {
          "border-b focus:border-orange-500": edit,
        })}
        ref={register({ required: true })}
        disabled={!edit}
      />
    </div>
  )
}
