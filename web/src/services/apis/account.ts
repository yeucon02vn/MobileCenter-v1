import { AppAPI } from "services/api-config"

const BASE_END_POINT = "Accounts/"
const detailUrl = {
  getUserInfo: "get-user-info",
  signIn: "sign-in",
  signUp: "sign-up",
  updateUserInfo: "update-info",
  updateAllUserInfo: "update-info-with-password",
  addUserAddress: "add-address",
  removeUserAddress: "delete-address",
  editUserAddress: "edit-address",
}

Object.keys(detailUrl).map((key) => {
  detailUrl[key] = BASE_END_POINT + detailUrl[key]
  return key
})

export const getUserInfo = async () => {
  return await AppAPI.get(detailUrl.getUserInfo)
}

export const signIn = async ({ email, password }): Promise<API.AccountResponse> => {
  return await AppAPI.post(detailUrl.signIn, {
    email,
    password,
  })
}

export const signUp = async ({ email, password, name }): Promise<API.AccountResponse> => {
  return await AppAPI.post(detailUrl.signUp, {
    email,
    password,
    name,
  })
}

export const updateUserInfo = async ({ name, phoneNumber, gender }) => {
  return await AppAPI.post(detailUrl.updateUserInfo, {
    name,
    phoneNumber,
    gender,
  })
}

export const updateAllUserInfo = async ({
  name,
  phoneNumber,
  gender,
  oldPassword,
  newPassword,
}) => {
  return await AppAPI.post(detailUrl.updateAllUserInfo, {
    name,
    phoneNumber,
    gender,
    oldPassword,
    newPassword,
  })
}

export interface AddressModel {
  id?: string
  name: string
  value: string
  phoneNumber: string
}

export const addUserAddress = async ({ value, phoneNumber, name }: AddressModel) => {
  return await AppAPI.post(detailUrl.addUserAddress, { value, phoneNumber, name })
}

export const removeUserAddress = async ({ id }) => {
  return await AppAPI.post(detailUrl.removeUserAddress, { id })
}

export const editUserAddress = async ({ id, value, phoneNumber, name }: AddressModel) => {
  return await AppAPI.post(detailUrl.editUserAddress, { id, value, phoneNumber, name })
}
export const logOut = async () => {
  localStorage.clear()
  // localStorage.removeItem(strings.token)
}
