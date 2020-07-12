import { AppInput } from "components"
import * as React from "react"

interface UpdatePasswordFormProps {
  register: any
  show?: boolean
}

export const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({ register, show }) => {
  if (!show) return null
  return (
    <div>
      <AppInput
        register={register}
        registerOption={{ required: true }}
        label="Old password"
        name="oldPassword"
        className="my-4"
        textClass="!text-left px-4"
        type="password"
      />
      <AppInput
        register={register}
        registerOption={{ required: true }}
        label="New password"
        name="newPassword"
        className="my-4"
        textClass="!text-left px-4"
        type="password"
      />
    </div>
  )
}
