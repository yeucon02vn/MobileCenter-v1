import Alert from "@material-ui/lab/Alert"
import cx from "classnames"
import { AppLoading, EmptyScreen } from "components"
import moment from "moment"
import React from "react"
import { useQueryGetMyOrders } from "services/apis"
import { formatMoney } from "utils"

interface OrderMangagementScreenProps {}

interface Order extends API.BoughtProductInfo {
  orderDate: string | Date
  status: string
}

export const OrderMangagementScreen: React.FC<OrderMangagementScreenProps> = (props) => {
  // return <div></div>
  const { data, isFetching, error } = useQueryGetMyOrders()
  const loading = isFetching

  console.log("data", data)
  if (loading) return <AppLoading />

  if (error) return <Alert severity="error">{error}</Alert>

  if (data?.length <= 0) return <EmptyScreen />

  return (
    <div className="">
      <div className="w-full px-24">
        <p className="mb-12 font-sans text-2xl text-gray-800">Your orders:</p>
        <table className="flex-1 table-fixed">
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2">Id</th>
              <th className="w-1/4 px-4 py-2">Date</th>
              <th className="w-1/2 px-4 py-2">Products</th>
              <th className="w-1/4 px-4 py-2">Total price:</th>
              <th className="w-1/4 px-4 py-2">Status:</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order, i) => {
              const { id, orderinfo } = order
              const { orderDate, status, carts } = orderinfo
              let productName = ""
              let totalPrice = 0

              carts.forEach((v, i) => {
                totalPrice += v?.price * v?.amount
                productName += v.name
                if (i < carts.length - 1) productName += ", "
              })

              return (
                <tr
                  className={cx({
                    "border-gray-200": i % 2 === 0,
                  })}
                >
                  <td className="w-1/2 px-4 py-2 border">{id}</td>
                  <td className="w-1/4 px-4 py-2 border">
                    {moment(orderDate).format("DD/MM/YYYY")}
                  </td>
                  <td className="w-1/2 px-4 py-2 border">{productName}</td>
                  <td className="w-1/4 px-4 py-2 border">{formatMoney(totalPrice)}</td>
                  <td className="w-1/4 px-4 py-2 border">{status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
