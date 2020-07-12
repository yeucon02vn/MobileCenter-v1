import { Button } from "@material-ui/core"
import { AppLoading, Screen } from "components"
import React from "react"
import { useHistory } from "react-router-dom"
import { Paths } from "router"
import { useQueryGetFavoriteProducts } from "services/apis"
import { images, typography } from "theme"
import { OrderSavedItem } from "./components/OrderSavedItem"

interface OrderEmptyScreenProps {}

export const OrderEmptyScreen: React.FC<OrderEmptyScreenProps> = (props) => {
  const history = useHistory()
  const { data: favorite, isFetching } = useQueryGetFavoriteProducts()

  if (isFetching) {
    return <AppLoading />
  }

  /* ------------- renders ------------- */

  const renderSelectFromYourSaved = () => {
    return (
      <div className="flex flex-col">
        <p className={typography.h3}>Or select from your saved :</p>
        <br />

        <div className="flex justify-between">
          <div>
            {favorite?.productId?.map((v) => {
              return <OrderSavedItem key={v} productId={v} />
            })}
          </div>
          <img src={images.shopping} alt="shopping illu" className="h-auto max-w-sm" />
        </div>
      </div>
    )
  }

  const renderThereNothing = () => {
    return (
      <div className="flex py-8 pb-24">
        <div>
          <img src={images.empty} className="h-auto max-w-sm" alt="images" />
        </div>
        <div className="pt-8 ml-24">
          <p className={typography.h3}>There are nothing left in your cart!</p>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(Paths.home)}
            className="mt-8 font-semibold rounded-xl"
          >
            Continue shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Screen className="pl-64 pr-64 ">
      {renderThereNothing()}

      {renderSelectFromYourSaved()}
    </Screen>
  )
}
