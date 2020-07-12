import cx from "classnames"
import React from "react"
import { BookOpen, Edit, Heart, MapPin, Settings, ShoppingCart, User } from "react-feather"
import { immer, persist } from "utils"
import create from "zustand"

interface ProfileNavbarProps {}

interface NavItem {
  icon: React.ElementType
  title: string
}

export const navItems: NavItem[] = [
  {
    title: "User info",
    icon: User,
  },
  {
    title: "Addresses",
    icon: MapPin,
  },
  {
    title: "Favorite products",
    icon: Heart,
  },
  {
    title: "Setting",
    icon: Settings,
  },
  {
    title: "Order management",
    icon: BookOpen,
  },
  {
    title: "My reviews",
    icon: Edit,
  },
  {
    title: "My purchased products",
    icon: ShoppingCart,
  },
]

interface ProfileNavbarState {
  selectedItem: number
  setSelectedItem: (val: number) => void
}

export const [useProfileNavBar] = create<ProfileNavbarState>(
  persist("profile-zustand")(
    immer((set, get) => ({
      selectedItem: 0,
      setSelectedItem: (value: number) => {
        set((state) => {
          state.selectedItem = value
        })
      },
    })),
  ),
)

export const ProfileNavbar: React.FC<ProfileNavbarProps> = (props) => {
  const itemClass =
    "block  text-gray-500 hover:border-orange-500 hover:bg-gray-200 flex items-center p-4"
  const { selectedItem, setSelectedItem } = useProfileNavBar()
  return (
    <div className="flex flex-col inline-block w-1/6 h-screen max-w-sm border-r">
      <p className="font-sans text-2xl font-semibold mx-12 my-8">User profile</p>
      <ul className="list-reset">
        {navItems.map((v, i) => {
          return (
            <li key={i} onClick={() => setSelectedItem(i)} className="cursor-pointer">
              <p
                className={cx(itemClass, {
                  "text-gray-700 font-bold border-r-2 border-orange-500 ": !!(selectedItem === i),
                })}
              >
                <v.icon className={cx("mr-4")} />
                {v.title}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
