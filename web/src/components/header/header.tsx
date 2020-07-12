import { Badge, Menu, MenuItem } from "@material-ui/core"
import FadeMenu from "@material-ui/core/Fade"
import MenuIcon from "@material-ui/icons/Menu"
import cx from "classnames"
import { SearchBar } from "components/search-bar/search-bar"
import { useSidebar } from "components/SideBar"
import React from "react"
import { ChevronDown, ShoppingCart, User, HelpCircle } from "react-feather"
import { useHistory } from "react-router"
import { Paths } from "router"
import { apiWorker } from "services"
import { strings, delay } from "utils"
import { useAccountStore, useCartStore, useSearchProductsStore } from "zustands"
import "./header.style.scss"
import { LoginFormModal, useFormModal } from "./LoginModal"
import { productsUrl } from "services/apis"
import { queryCache } from "react-query"

export type HeaderType = "search" | "simple"

export interface HeaderState {
  type: HeaderType
}

export const Header: React.FC<HeaderState> = ({ type }) => {
  /* ------------- hooks ------------- */
  const { toggleSidebar } = useSidebar()
  const { account } = useAccountStore()
  const { length } = useCartStore()
  const { setQuery, clearQuery, setKeyword } = useSearchProductsStore()
  // eslint-disable-next-line
  // const classes = useStyles()
  const history = useHistory()
  const { openForm } = useFormModal()
  /* ------------- fields ------------- */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)

  /* ------------- methods ------------- */

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

  const handleCloseMenu = () => setAnchorEl(null)

  const token = localStorage.getItem(strings.token)

  const isSearch = type === "search"
  const textColor = { "text-white": isSearch }

  /* ------------- renders ------------- */
  const renderSearchBar = () => {
    return (
      <>
        <div className="flex items-center justify-center flex-1 w-full">
          <SearchBar
            onClick={(v) => {
              if (v === "") {
                clearQuery()
                return
              }
              const query = `${productsUrl.search}/${v}?`
              setQuery(query)
              setKeyword(v)
              delay(100).then(() => {
                queryCache.invalidateQueries("getAllProducts")
              })
            }}
          />
        </div>

        <div className="flex flex-row items-center">
          <div
            className={cx("flex flex-row items-center mr-4 cursor-pointer ", textColor)}
            onClick={() => history.push(Paths.feedback)}
          >
            <HelpCircle />
            <p className={cx(textColor, "ml-2")}>Get help?</p>
          </div>
          <div
            className={cx("flex flex-row items-center mr-4 cursor-pointer ", textColor)}
            onClick={token ? handleOpenMenu : () => openForm()}
            onMouseOver={token ? handleOpenMenu : undefined}
            aria-controls={openMenu ? "menu-list-grow" : undefined}
            aria-haspopup="true"
          >
            <User className="mr-2" />
            <p className={cx(textColor)}>{token ? account.name : "Login / Sign up"}</p>
            {token && <ChevronDown />}
          </div>

          {token && (
            <Badge badgeContent={length} color="primary">
              <ShoppingCart
                className={cx("cursor-pointer ", textColor)}
                onClick={() => history.push(Paths.orderGeneral)}
              />
            </Badge>
          )}
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={openMenu}
            onClose={handleCloseMenu}
            TransitionComponent={FadeMenu}
            MenuListProps={{ onMouseLeave: handleCloseMenu }}
          >
            <div className="py-3 ">
              <>
                <MenuItem
                  onClick={() => {
                    handleCloseMenu()
                    history.push(Paths.userProfile)
                  }}
                >
                  My account
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseMenu()
                    apiWorker.logOut()
                    history.push(Paths.home)
                  }}
                >
                  Logout
                </MenuItem>
              </>
            </div>
          </Menu>
          <LoginFormModal />
        </div>
      </>
    )
  }

  return (
    <div
      className={cx(
        "relative flex min-w-screen py-12 pl-32 md:pr-32 flex-row justify-between inset-x-0 top-0  z-10 ",
        {
          "bg-cloud-burst-500": isSearch,
        },
      )}
    >
      <div className="flex flex-row items-center">
        <MenuIcon
          onClick={toggleSidebar}
          className={cx("mr-8 cursor-pointer", textColor)}
          fontSize="large"
        />
        <div
          className={"children:inline-block text-4xl cursor-pointer"}
          onClick={() => {
            history.push(Paths.home)
            clearQuery()
          }}
        >
          <p className={cx("mr-2", textColor)}>Holly</p>
          <p className="text-primary">Pocket </p>
        </div>
      </div>
      {type === "search" && renderSearchBar()}
    </div>
  )
}

Header.defaultProps = {
  type: "search",
}
