import produce from "immer"

const isBrowser = typeof window !== "undefined"

export const zustandLog = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log("  applying", args)
      set(args)
      console.log("  new state", get())
    },
    get,
    api,
  )

export const persist = (LS_KEY: string) => (config) => (set, get, api) => {
  const initialState = config(
    (args) => {
      set(args)
      window.localStorage.setItem(LS_KEY, JSON.stringify(get()))
    },
    get,
    api,
  )
  let restoredState = {}

  if (isBrowser) {
    let restore: any = localStorage.getItem(LS_KEY)
    if (restore) restore = JSON.parse(restore)

    restoredState = restore
  }

  return {
    ...initialState,
    ...restoredState,
  }
}
export const immer = (config) => (set, get, api) => config((fn) => set(produce(fn)), get, api)
