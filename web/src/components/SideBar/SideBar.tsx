import React from "react"
import create from "zustand"
import { useDrag } from "react-use-gesture"
import { useSpring, animated, to } from "react-spring"
import { useLocalStorage, useMount, useWindowSize } from "react-use"
import { persist, immer } from "../../utils/zustand"
import { Paths } from "router"
import { useHistory } from "react-router-dom"
import CloseIcon from "@material-ui/icons/Close"
import { useProfileNavBar } from "screens/profile-screen/components/ProfileNavbar"

const LS_KEY = "sidebarState"
const DEFAULT_WIDTH = 280
const V_THRESHOLD = 0.15 // velocity --> how fast the swipe is
const D_THRESHOLD = 0.6 // direction --> how straight the swipe is

interface SidebarState {
  isMobile: boolean
  sidebarWidth: number
  isOpen: boolean
  toggleSidebar: () => void
  useDragSidebar: () => any
  useDragMain: () => any
  useSidebarLayout: () => any
  useSidebarStyle: () => any
  useMainStyle: () => any
}

const [useSidebar] = create<SidebarState>(
  persist(LS_KEY)(
    immer((set, get) => ({
      isMobile: true,
      sidebarWidth: 0,
      isOpen: false,
      toggleSidebar: () => {
        set((state: SidebarState) => {
          state.isOpen = !state.isOpen
        })
      },
      useSidebarStyle: () => {
        const { translate } = useSpring({
          translate: [get().isOpen ? 0 : -100],
        })
        return {
          transform: to(translate, (x) => `translateX(${x}%)`),
        }
      },
      useMainStyle: () => {
        const { isMobile, isOpen, sidebarWidth } = get()
        return useSpring({
          marginLeft: isMobile ? 0 : isOpen ? sidebarWidth : 0,
        })
      },
      useSidebarLayout: () => {
        const [persistedState] = useLocalStorage<SidebarState>(LS_KEY)
        const { width } = useWindowSize()
        const isMobile = width < 500

        useMount(() => {
          set((state: SidebarState) => {
            state.sidebarWidth = isMobile ? width : DEFAULT_WIDTH
            state.isMobile = isMobile
            state.isOpen = persistedState ? persistedState.isOpen : false
          })
        })
      },
      useDragSidebar: () => {
        return useDrag(({ direction, velocity, last }) => {
          if (direction[0] < -D_THRESHOLD && last && velocity > V_THRESHOLD) {
            get().toggleSidebar()
          }
        })
      },
      useDragMain: () => {
        return useDrag(({ direction, velocity, last }) => {
          if (direction[0] > D_THRESHOLD && last && velocity > V_THRESHOLD) {
            get().toggleSidebar()
          }
        })
      },
    })),
  ),
)

function Sidebar() {
  const { toggleSidebar, useDragSidebar, useSidebarStyle } = useSidebar()
  const { setSelectedItem } = useProfileNavBar()

  const styles = useSidebarStyle()
  const bindSidebar = useDragSidebar()

  const history = useHistory()

  const handleOnClick = (path: string) => {
    history.push(path)
    toggleSidebar()
  }

  return (
    <animated.div
      {...bindSidebar()}
      // className="fixed top-0 left-0 h-full px-4 py-12 scrolling-touch text-white pr-80"
      className="fixed top-0 z-50 h-full px-10 py-6 scrolling-touch"
      style={{
        ...styles,
        // sidebarWidth,
        position: "absolute",
        left: 0,
        bot: 0,
        backgroundColor: "#121212",
      }}
    >
      <div className="w-full">
        <button className="pl-0 mb-8 ml-0 text-left bg-transparent btn">
          <CloseIcon
            style={{ color: "white" }}
            fontSize="large"
            className="self-end pl-0 ml-0 d-block"
            onClick={() => toggleSidebar()}
          />
        </button>
      </div>

      <div className="px-12 pr-24">
        <Item onClick={() => handleOnClick(Paths.home)}>Home</Item>
        <Item
          onClick={() => {
            handleOnClick(Paths.orderGeneral)
          }}
        >
          Check cart
        </Item>
        <Item
          onClick={() => {
            setSelectedItem(4)
            handleOnClick(Paths.userProfile)
          }}
        >
          Check order
        </Item>
        <Item
          onClick={() => {
            setSelectedItem(2)
            handleOnClick(Paths.userProfile)
          }}
        >
          Favorite product
        </Item>
        <Item
          onClick={() => {
            setSelectedItem(3)
            handleOnClick(Paths.userProfile)
          }}
        >
          Setting
        </Item>

        <Item
          onClick={() => {
            setSelectedItem(5)
            handleOnClick(Paths.userProfile)
          }}
        >
          My reviews
        </Item>

        <Item
          onClick={() => {
            setSelectedItem(6)
            handleOnClick(Paths.userProfile)
          }}
        >
          My purchased
        </Item>
      </div>
    </animated.div>
  )
}

interface ItemProps {
  onClick: () => void
  children: any
}

const Item: React.FC<ItemProps> = ({ onClick, children }) => {
  return (
    <div className="mb-6">
      <button className="text-white bg-transparent btn text__h4" onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Sidebar
export { Sidebar, useSidebar }
