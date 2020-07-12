import React from "react"
import { Screen } from "components"
import { useForm } from "react-hook-form"
import { TextField, Button } from "@material-ui/core"
import { useMutation } from "react-query"
import { createFeedback } from "services/apis"
import { useSnackbar } from "notistack"

interface FeedbackScreenProps {}

export const FeedbackScreen: React.FC<FeedbackScreenProps> = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const { enqueueSnackbar } = useSnackbar()
  const [muFeedback] = useMutation(createFeedback, {
    onSuccess() {
      enqueueSnackbar("Feedback success!")
    },
    onError(e) {
      enqueueSnackbar(e?.message || e, {
        variant: "warning",
      })
    },
  })
  const onSubmit = (data) => {
    muFeedback(data)
  }

  console.log(errors)
  return (
    <Screen
      style={{
        marginLeft: "20%",
      }}
    >
      <p className="mb-12 text-3xl">Send feedback:</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-12" style={{ width: 600 }}>
          <TextField
            type="text"
            placeholder="Email"
            name="email"
            inputRef={register({
              required: "Required field",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Not correct email format",
              },
            })}
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <br />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Title"
            name="title"
            inputRef={register({ required: "Required field" })}
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
          />
          <br />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Description"
            name="description"
            inputRef={register({ required: "Required field" })}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />
          <br />
          <TextField
            variant="outlined"
            type="text"
            placeholder="OrderId"
            name="orderId"
            inputRef={register({ required: "Required field" })}
            error={!!errors.orderId}
            helperText={errors.orderId && errors.orderId.message}
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary" className={""}>
            Submit
          </Button>
        </div>
      </form>
    </Screen>
  )
}
