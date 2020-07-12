import {
  HomeScreen,
  OrderGeneralScreen,
  ProfileScreen,
  ProductDetailScreen,
  FeedbackScreen,
} from "screens"
import { OrderSuccessScreen } from "screens/order-general-screen/OrderSuccessScreen"
import { RateProductScreen } from "screens/rate-product/RateProductScreen"

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
  rateProduct: "/rateProduct/",
  feedback: "/feedback",
}

Object.keys(Paths).map((key) => {
  Paths[key] = process.env.PUBLIC_URL + Paths[key]
  return key
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

  {
    Component: RateProductScreen,
    path: Paths.rateProduct + ":id",
  },
  {
    Component: FeedbackScreen,
    path: Paths.feedback,
  },
]

export { Paths }
