import React from "react"
import { useParams, useHistory } from "react-router-dom"
import { Screen } from "components"
import { images, typography } from "theme"
import cx from "classnames"
import { Button } from "@material-ui/core"
import { Paths } from "router"

export const OrderSuccessScreen: React.FC = () => {
  const { id } = useParams()
  const history = useHistory()
  return (
    <Screen className="flex">
      <div className="py-12 mx-12 w-80">
        <img src={images.purchaseSuccess} alt="img" />
      </div>

      <div>
        <p className={cx(typography.h3)}>We have received your order.</p>
        <br />

        <p className={cx(typography.h4)}>Thank you for your purchase. </p>
        <br />

        <br />
        <br />
        <p>Your order id: {id}</p>
        <br />
        <br />

        <Button
          onClick={() => {
            history.push(Paths.home)
          }}
          color="primary"
          variant="contained"
        >
          Continue shopping
        </Button>
      </div>
    </Screen>
  )
}
