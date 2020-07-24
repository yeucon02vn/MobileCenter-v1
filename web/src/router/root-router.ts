import { HomeScreen, OrderGeneralScreen, ProfileScreen, ProductDetailScreen } from "screens"
import { OrderSuccessScreen } from "screens/order-general-screen/OrderSuccessScreen"

export interface RouterModel {
  path: string
  Component?: any
}

const Paths = {
  home: "/",
  homeDetail: "/product-detail/",
  orderGeneral: "/order",
  orderSuccess: "/order-success/",
  userProfile: "/user-profile",
  productDetail: "/product/",
}

// eslint-disable-next-line
Object.keys(Paths).map((key) => {
  Paths[key] = process.env.PUBLIC_URL + Paths[key]
})

export const RootRouters: RouterModel[] = [
  {
    Component: HomeScreen,
    path: Paths.home,
  },
  {
    Component: OrderGeneralScreen,
    path: Paths.orderGeneral,
  },
  {
    Component: ProfileScreen,
    path: Paths.userProfile,
  },
  {
    Component: ProductDetailScreen,
    path: Paths.productDetail + ":id",
  },
  {
    Component: OrderSuccessScreen,
    path: Paths.orderSuccess + ":id",
  },
]

export { Paths }
