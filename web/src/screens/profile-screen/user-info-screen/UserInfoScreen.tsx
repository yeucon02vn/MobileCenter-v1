import { Button, Checkbox, FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import cx from "classnames"
import { AppInput, AppLoading } from "components"
import { useSnackbar } from "notistack"
import React from "react"
import { useForm } from "react-hook-form"
import { UpdatePasswordForm } from "screens/profile-screen/user-info-screen/UpdatePasswordForm"
import { useAccountStore } from "zustands"

interface UserInfoScreenProps {}

export const UserInfoScreen: React.FC<UserInfoScreenProps> = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { fetchNew, account, updateInfo, updateAllInfo, loading } = useAccountStore()
  const [showChangePass, setShowChangePass] = React.useState(false)

  const { register, handleSubmit, getValues, setValue } = useForm<API.AccountInfo>({
    defaultValues: {
      ...account,
      gender: account.gender || "male",
    },
  })

  const btnClass = "py-2 "

  // const [value, setValue] = React.useState("female")

  React.useEffect(() => {
    register({ name: "gender" }) // custom register react-select
  }, [register])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        fetchNew()
      } catch (error) {
        enqueueSnackbar(error, { variant: "error" })
      }
    }
    fetchData()
  }, [fetchNew, enqueueSnackbar])

  if (loading) return <AppLoading />

  /* ------------- methods ------------- */
  const onSubmit = async (data) => {
    console.log("data", data)
    try {
      const apiMethod = showChangePass ? updateAllInfo : updateInfo
      data.gender = getValues("gender")
      const rs = await apiMethod(data)
      console.log("rs update ", rs)
      if (rs) {
        enqueueSnackbar("Update succesfully!")
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "warning" })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("gender", (event.target as HTMLInputElement).value)
  }

  /* ------------- renders ------------- */

  return (
    <div className="py-8 pl-24">
      <div>
        <AppInput
          register={register}
          registerOption={{ required: true }}
          label="Your email: "
          name="email"
          disabled
        />

        <div className="flex my-8 mb-8">
          <AppInput
            className="mr-8"
            register={register}
            registerOption={{ required: true }}
            label="Your name: "
            name="name"
          />
          <AppInput
            register={register}
            registerOption={{ required: true }}
            label="Phone number"
            name="phoneNumber"
          />
        </div>

        <div className="flex items-center mb-8">
          <p className="text-gray-600 mr-8">Gender: </p>
          <RadioGroup
            aria-label="gender"
            name="gender"
            onChange={handleChange}
            value={getValues("gender")}
            row
            defaultValue={getValues("gender")}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>

        <FormControlLabel
          control={
            <Checkbox
              checked={showChangePass}
              onChange={() => {
                setShowChangePass((p) => !p)
              }}
              name="checkedB"
              className="text-orange-500"
            />
          }
          label="Change password"
          className="!text-gray-600"
        />
        <UpdatePasswordForm register={register} show={showChangePass} />
      </div>
      <div className="flex my-8 mt-16">
        <Button
          variant="text"
          color="primary"
          className={cx(btnClass, "!mr-4 !text-orange-500 !font-bold")}
        >
          Discard
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={btnClass}
          onClick={handleSubmit(onSubmit)}
        >
          Save change
        </Button>
      </div>
    </div>
  )
}
