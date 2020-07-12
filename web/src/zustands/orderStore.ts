import { immer, persist } from "utils"
import create from "zustand"

interface OrderState {
  totalPrice: number
  setTotalPrice: (v: number) => void
  addMorePrice: (v: number) => void
}

export const [useOrderStore] = create<OrderState>(
  persist("CartsTore")(
    immer((set: any, get: any) => ({
      totalPrice: 0,
      setTotalPrice: (v: number) => {
        set((state: OrderState) => {
          state.totalPrice = v
        })
      },
      addMorePrice: (v: number) => {
        set((state: OrderState) => {
          state.totalPrice += v
        })
      },
    })),
  ),
)
