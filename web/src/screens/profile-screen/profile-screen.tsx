import { Screen } from "components"
import React from "react"
import { LovedProductScreen } from "screens/profile-screen/loved-product-screen"
import { AddressManagementScreen } from "./address-management-screen"
import { BoughtProductMangagementScreen } from "./bought-product-mangagement-screen/BoughtProductMangagementScreen"
import { ProfileNavbar, useProfileNavBar } from "./components/ProfileNavbar"
import { MyReivewScreen } from "./my-review-screen/MyReivewScreen"
import { OrderMangagementScreen } from "./OrderMangagementScreen"
import { SettingsScreen } from "./SettingsScreen"
import { UserInfoScreen } from "./user-info-screen/UserInfoScreen"

interface ProfileScreenProps {}

const listScreen: React.ElementType[] = [
  UserInfoScreen,
  AddressManagementScreen,
  LovedProductScreen,
  SettingsScreen,
  OrderMangagementScreen,
  MyReivewScreen,
  BoughtProductMangagementScreen,
]

export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  const { selectedItem } = useProfileNavBar()
  const ScreenDisplay = listScreen[selectedItem]
  return (
    <Screen className="flex pr-0">
      <ProfileNavbar />
      <ScreenDisplay />
    </Screen>
  )
}
