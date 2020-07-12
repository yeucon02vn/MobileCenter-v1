import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { Header, HeaderType, Sidebar } from "components"
import { Footer } from "components/footer/footer"
import { SnackbarProvider } from "notistack"
import React, { Suspense, useEffect } from "react"
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom"
import colors from "theme/color/_colors.scss"
import { Paths, RootRouters } from "./router"
import { PageNotFoundScreen } from "./screens"
import "./tailwind.scss"
import "react-lazy-load-image-component/src/effects/blur.css"

// import "./styles/index.scss"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const AnimateApp: React.FC = () => {
  const location = useLocation()
  let type: HeaderType = "search"
  if (location.pathname === Paths.orderGeneral) type = "simple"

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Header type={type} />
        <Switch location={location}>
          {RootRouters.map((val) => {
            return (
              <Route
                onUpdate={() => window.scrollTo(0, 0)}
                path={val.path}
                component={val.Component}
                key={val.path}
                exact
              />
            )
          })}

          <Route path="/" render={() => <PageNotFoundScreen />} />
        </Switch>
      </Suspense>
    </>
  )
}

function App(): any {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "light",
          primary: {
            main: colors.primary,
            light: colors.primary,
            dark: colors.primary,
          },
          secondary: {
            main: colors.secondary,
            light: colors.secondary,
            dark: colors.secondary,
          },
          background: {
            // paper: colors.white,
          },
        },
        props: {
          MuiButton: {
            disableElevation: true,
          },
        },
        typography: {
          fontFamily: "Rubik",
          fontSize: 16,
          button: {
            textTransform: "none",
          },
        },
        overrides: {
          MuiButton: {
            root: {
              padding: "12px",
              paddingLeft: "32px",
              paddingRight: "32px",
            },
          },
        },
      }),
    [],
  )

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <SnackbarProvider maxSnack={3}>
          <Sidebar />
          <AnimateApp />
          <Footer />
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
