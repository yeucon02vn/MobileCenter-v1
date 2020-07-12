import { Input, TextareaAutosize } from "@material-ui/core"
import { Done } from "@material-ui/icons"
import cx from "classnames"
import { useSnackbar } from "notistack"
import React, { useEffect, useRef } from "react"
import { Edit } from "react-feather"
import { Controller, useForm } from "react-hook-form"
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { queryCache, useMutation } from "react-query"
import { updateProduct } from "services/apis"
import { typography } from "theme"
import { calcRating, delay } from "utils"
import { Gallary } from "./Gallary"

interface ProductInfoProps {
  product: API.ProductData
}

const renderStar = (amount: number, Star: any) => {
  const list = new Array(amount).fill(0)
  return list.map((_, i) => {
    return (
      <div key={i}>
        <Star className="text-primary" />
      </div>
    )
  })
}

interface Form extends API.ProductData {
  descriptions: string
}

export const ProductInfoAdmin: React.FC<ProductInfoProps> = (props) => {
  const { product } = props
  const {
    productName: title,
    info,
    price,
    rate: rating,
    id,
    provider,
    discount,
    isDeleted,
    questions,
  } = product

  const { enqueueSnackbar } = useSnackbar()

  /* ------------- refs------------- */
  const refTitle = useRef<any>()
  const refForm = useRef<any>()

  /* ------------- mutations ------------- */
  const [muUpdate] = useMutation(updateProduct, {
    onSuccess() {
      enqueueSnackbar("Success")
      delay(100).then(() => {
        queryCache.invalidateQueries("getProductById")
      })
    },

    onError(e) {
      enqueueSnackbar(e.message)
    },
  })

  /* ------------- effect ------------- */

  let descConv = ""
  info.descriptions.forEach((v, i) => {
    descConv += v
    if (i !== 0 && i !== info.descriptions.length - 1) descConv += "\n"
  })
  const [editting, setEditting] = React.useState(undefined)
  const { register, handleSubmit, control, getValues } = useForm<Form>({
    defaultValues: {
      id,
      info,
      rate: rating,
      price,
      discount,
      provider,
      productName: title,
      questions,
      isDeleted,
      descriptions: descConv,
    },
  })

  const starRs = calcRating(rating)
  const commentCount = 10

  React.useEffect(() => {
    register("price", { required: true })
    register("id")
    register("info", { required: true })
    register("rate")
    register("discount", { required: true })
    register("provider", { required: true })
    register("productName", { required: true })
    register("questions")
    register("isDeleted")
  }, [register])

  useEffect(() => {
    if (editting) refTitle?.current?.focus()
    if (editting === false) {
      refForm.current?.dispatchEvent(new Event("submit", { cancelable: true }))
    }
  }, [editting])

  /* ------------- methods ------------- */
  const onSubmit = (data: any) => {
    muUpdate({
      upPro: data,
    })
  }

  const handleSetEdit = () => {
    setEditting(!editting)
  }

  const onImageChange = (e: any) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const formData = new FormData()

      formData.append("replaceThumb", e.target.files[0])
      muUpdate({
        upPro: getValues(),
        replaceThumb: formData,
      })
    }
  }

  const TitleIcon = editting ? Done : Edit

  /* ------------- renders ------------- */
  return (
    <div className="flex">
      <div className="mr-8">
        <Gallary
          thumbnailId={product!.thumbnailId}
          gallariesId={product!.pictures}
          className="flex flex-col w-1/3 "
        />
        <input
          id="upload"
          type="file"
          className="mb-12"
          onChange={(event) => {
            onImageChange(event)
          }}
          onClick={(event: any) => {
            event.target!.value = null
          }}
        />
      </div>

      <div className="flex flex-col w-2/3">
        <form className="flex justify-between" onSubmit={handleSubmit(onSubmit)} ref={refForm}>
          <Controller
            name="productName"
            as={Input}
            control={control}
            className={cx("!text-gray-700", typography.h4)}
            disabled={!editting}
            inputRef={refTitle}
          />
          <TitleIcon
            className="text-gray-500 cursor-pointer"
            onClick={() => {
              handleSetEdit()
            }}
          />
        </form>
        <br />

        <div className="flex">
          <div className="flex">
            {renderStar(starRs.fullStars, TiStarFullOutline)}
            {renderStar(starRs.halfStars, TiStarHalfOutline)}
            {renderStar(starRs.noneStars, TiStarOutline)}
          </div>
          <p className="ml-4 text-purple-700">( {commentCount} comments )</p>
        </div>
        <br />

        <div className={cx("!text-orange-500 flex items-center", typography.h3)}>
          <p className={cx("!text-orange-500 mr-2", typography.h3)}>Price: </p>
          <Controller
            name="price"
            as={Input}
            control={control}
            className={cx("!text-orange-500", typography.h3)}
            disabled={!editting}
          />
        </div>

        <br />

        <div>
          <Controller
            name="descriptions"
            as={TextareaAutosize}
            rowsMax={10}
            rowsMin={5}
            control={control}
            className={cx("!mb-2 !text-gray-600 !w-full !p-4")}
            disabled={!editting}
          />
        </div>
      </div>
    </div>
  )
}

// {descConv.map((v, i) => (
// <p key={i} className="mb-2 text-gray-600">
// - {v}
// </p>
// ))}
