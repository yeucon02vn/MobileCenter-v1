import { Screen } from "components"
import { useSnackbar } from "notistack"
import React from "react"
import { useParams } from "react-router-dom"
import { ProductInfoAdmin } from "screens/product-detail-screen/components/ProductInfoAdmin"
import { useGetProduct, useQueryGetQuestions } from "services/apis"
import { useAccountStore } from "zustands"
import { Gallary } from "./components/Gallary"
import { ProductInfo } from "./components/ProductInfo"
import { QuestionsAndAnswer } from "./components/QuestionsAndAnswer"

interface ProductDetailScreenProps {}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = (props) => {
  const { id } = useParams()
  const { data, error, isFetching } = useGetProduct(id || "")
  const { data: questions, isFetching: isFetchingQuestion } = useQueryGetQuestions(id)
  const { account } = useAccountStore()
  const { enqueueSnackbar } = useSnackbar()
  // const [data, setData] = React.useState(undefined)

  const isAdmin = account?.accountType === 0

  React.useEffect(() => {
    // getProduct("", id).then((d) => {
    // setData(d)
    // })
  }, [])

  if (error) {
    enqueueSnackbar(error?.message, { variant: "warning" })
  }

  const isLoading = isFetching || isFetchingQuestion

  if (!data || isLoading) return <div className="min-h-screen">loading...</div>

  return (
    <Screen>
      {isAdmin ? (
        <ProductInfoAdmin product={data} />
      ) : (
        <div className="flex">
          <Gallary
            thumbnailId={data?.thumbnailId}
            gallariesId={data?.pictures}
            className="flex flex-col w-1/3 mt-8"
          />
          <ProductInfo product={data} totalQuestions={questions?.result?.items.length} />
        </div>
      )}

      <QuestionsAndAnswer productId={id} questions={questions} />
    </Screen>
  )
}
