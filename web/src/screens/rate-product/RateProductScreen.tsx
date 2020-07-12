import { Button, TextareaAutosize, TextField } from "@material-ui/core"
import { AppLoading, Screen } from "components"
import { useSnackbar } from "notistack"
import React from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { useHistory, useParams } from "react-router-dom"
import { Paths } from "router"
import { useGetProduct } from "services/apis"
import { createReview } from "services/apis/rate.api"
import { typography } from "theme"
import { Info } from "./Info"

interface RateProductScreenProps {}
const width = 500

export const RateProductScreen: React.FC<RateProductScreenProps> = (props) => {
  const { id } = useParams()
  const { data, isLoading } = useGetProduct(id)
  const { enqueueSnackbar } = useSnackbar()
  const { register, handleSubmit, setValue, errors } = useForm()
  const history = useHistory()
  const [muCreateReview] = useMutation(createReview, {
    onSuccess(d) {
      enqueueSnackbar("Review successfully!")
      history.push(Paths.home)
    },
    onError(e) {
      enqueueSnackbar(e.message, {
        variant: "warning",
      })
    },
  })

  React.useEffect(() => {
    register("rate", {
      required: "Is required",
      min: {
        value: 1,
        message: "Must greater than 0",
      },
      max: {
        value: 5,
        message: "Must smaller than 5",
      },
    })
    register("title", { required: "Is required" })
  }, [])

  if (isLoading) return <AppLoading />

  const onSubmit = (data) => {
    const rate = Number(data?.rate)
    muCreateReview({
      data: {
        valueRating: rate,
        title: data?.title,
        description: data?.description,
      },
      productId: id,
    })
  }
  const handleChange = (e, type) => {
    setValue(type, e)
  }
  console.log("errors", errors)

  return (
    <Screen>
      <div className="flex">
        <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
          <p className={typography.h4}>Rate product:</p>
          <div className="w-full my-4">
            <p>Your rating:</p>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width }}
              onChange={(e) => {
                handleChange(e.target.value, "rate")
              }}
              error={errors?.rate}
              helperText={errors?.rate?.message}
              type="number"
            />
          </div>
          <div className="w-full my-4">
            <p>Title:</p>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width }}
              onChange={(e) => handleChange(e.target.value, "title")}
              error={errors?.title}
              helperText={errors?.title?.message}
            />
          </div>
          <br />
          <div className={"my-4 w-full"}>
            <p>Details:</p>
            <br />
            <TextareaAutosize
              ref={register({
                required: "Is required",
              })}
              name="description"
              rowsMax={5}
              rowsMin={5}
              aria-label="maximum height"
              placeholder="Your detail review:"
              className="!border !p-4"
              style={{ width }}
            />
            {errors?.description && <p className="text-red-500">{errors.description?.message}</p>}
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>

        <Info product={data} />
      </div>
    </Screen>
  )
}
