import * as React from "react"
import { useSnackbar } from "notistack"
const defaultMax = Infinity
export const useIncrement = (init = 0, maxValue = defaultMax) => {
  const [value, setValue] = React.useState<number>(init)
  const { enqueueSnackbar } = useSnackbar()
  const increase = () => {
    if (value !== maxValue) setValue((p) => p + 1)
    else {
      enqueueSnackbar("This is max value you can increase")
    }
  }
  const decrease = () => {
    if (value !== 0) setValue((p) => p - 1)
  }
  return { value, setValue, increase, decrease }
}
