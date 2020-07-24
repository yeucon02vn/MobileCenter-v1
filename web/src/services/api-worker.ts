import { AppAPI } from "./api-config"
import * as api from "./apis"

const getUsers = async () => {
  return await AppAPI.get("posts")
}

export const apiWorker = {
  getUsers,
  ...api,
}
