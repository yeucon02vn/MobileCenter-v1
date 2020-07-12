import { Button } from "@material-ui/core"
import cx from "classnames"
import { AppInput } from "components"
import { useSnackbar } from "notistack"
import React from "react"
import { useForm } from "react-hook-form"
import { images, typography } from "theme"
import { useAccountStore } from "zustands"
import { AddressItem } from "./AddressItem"

interface AddressManagementScreenProps {}

export const AddressManagementScreen: React.FC<AddressManagementScreenProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar()

  const { fetchNew, account, addAddress } = useAccountStore()

  const { addresses } = account

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: account.name,
      phoneNumber: account.phoneNumber,
    },
  })

  React.useEffect(() => {
    try {
      fetchNew()
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" })
    }
  }, [fetchNew, enqueueSnackbar])

  const onSubmit = (data) => {
    try {
      addAddress(data).then(() => enqueueSnackbar("Added new address"))
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" })
    }
  }

  const refForm = React.useRef(null)
  const appInputClass = "!text-left !pl-4"
  const appInputContainerClass = "pl-4 mb-8"
  return (
    <div className="flex pt-12 pl-24">
      <div className="pr-24 border-r">
        <p className="text-2xl text-gray-700">Your addresses:</p>

        {addresses.length > 0 ? (
          <div className="pb-4">
            {addresses.map((v, i) => (
              <AddressItem address={v} key={v.id} />
            ))}
          </div>
        ) : (
          <div className="w-full px-24 py-24 ">
            <img src={images.profileNoItem} alt="no_item_img" className="w-2xl" />
            <div className="mt-8">
              <p className={cx("w-full text-gray-600 text-center", typography.h6)}>
                There is no address add yet!
              </p>
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={refForm}
        className="flex flex-col items-center w-full pl-24 "
      >
        <p className="text-2xl text-gray-700">New one:</p>
        <div className="flex flex-col p-8 items-center ">
          <AppInput
            {...{ register }}
            registerOption={{}}
            name="name"
            label="Name: "
            textClass={appInputClass}
            className={appInputContainerClass}
          />
          <AppInput
            {...{ register }}
            registerOption={{}}
            name="value"
            label="Address: "
            textClass={appInputClass}
            className={appInputContainerClass}
          />
          <AppInput
            {...{ register }}
            registerOption={{}}
            name="phoneNumber"
            label="Phone number: "
            textClass={appInputClass}
            className={appInputContainerClass}
          />
        </div>
        <div className="flex justify-end">
          <Button variant="outlined" color="secondary" type="submit">
            Add new
          </Button>
        </div>
      </form>
    </div>
  )
}
