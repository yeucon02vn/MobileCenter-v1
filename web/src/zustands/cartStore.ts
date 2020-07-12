import create from "zustand"
import { persist, immer } from "utils"
import { apiWorker } from "services"

interface CartState {
  length: number
  setLength: (v: number) => void
  updateLength: () => void
}

export const [useCartStore] = create<CartState>(
  persist("CartsTore")(
    immer((set: any, get: any) => ({
      length: 0,
      setLength: (v) => {
        set((state: CartState) => {
          state.length = v
        })
      },
      updateLength: () => {
        apiWorker.getCartItemsLength().then((v) => {
          if (get().length !== v)
            set((state: CartState) => {
              state.length = v
            })
        })
      },
    })),
  ),
)
