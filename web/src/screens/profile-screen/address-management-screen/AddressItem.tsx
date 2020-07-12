import { Button } from "@material-ui/core"
import { useSnackbar } from "notistack"
import * as React from "react"
import { MapPin, Trash2 } from "react-feather"
import { useForm } from "react-hook-form"
import { AddressModel } from "services/apis"
import { useAccountStore } from "zustands"
import { TextWithIcon } from "./TextWithIcon"

interface AddressItemProps {
  address: AddressModel
}

export const AddressItem: React.FC<AddressItemProps> = ({ address }) => {
  const { id, value, phoneNumber, name } = address
  const { enqueueSnackbar } = useSnackbar()
  const { editAddress, removeAddress } = useAccountStore()
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      value,
      phoneNumber,
      name,
    },
  })

  const [editting, setEditting] = React.useState(false)

  const onSubmit = async (data) => {
    try {
      const rs = await editAddress({ ...data, id })
      if (rs) {
        enqueueSnackbar("Edit successfully")
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "warning" })
      setValue("value", value)
      setValue("phoneNumber", phoneNumber)
      setValue("name", name)
    }
  }

  const formRef = React.useRef<HTMLFormElement>(null)

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <div className="flex justify-between p-4 px-8 mx-6 my-12 border rounded-lg">
        <div>
          <input
            className="font-semibold"
            name="name"
            ref={register({ required: true })}
            disabled={!editting}
          />
          <TextWithIcon text={value} Icon={MapPin} {...{ register }} edit={editting} />
          <input name="phoneNumber" ref={register({ required: true })} disabled={!editting} />
        </div>
        <Button
          variant="text"
          className="!text-orange-500 !ml-4 w-24 !hover:bg-orange-200 !outline-none"
          onClick={() => {
            if (editting) formRef!.current!.dispatchEvent(new Event("submit", { cancelable: true }))
            setEditting((p) => !p)
          }}
        >
          {editting ? "Done" : "Edit"}
        </Button>

        {editting && (
          <div
            className="flex items-center cursor-pointer outline-none"
            onClick={() =>
              removeAddress({ id }).then(() =>
                enqueueSnackbar("Deleted address " + value, { variant: "warning" }),
              )
            }
          >
            <Trash2 className="text-purple-500" />
          </div>
        )}
      </div>
    </form>
  )
}
