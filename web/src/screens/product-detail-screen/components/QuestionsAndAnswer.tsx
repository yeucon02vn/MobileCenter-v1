import { Button } from "@material-ui/core"
import cx from "classnames"
import { useSnackbar } from "notistack"
import React from "react"
import { useForm } from "react-hook-form"
import { queryCache, useMutation } from "react-query"
import { askQuestion } from "services/apis"
import { typography } from "theme"

interface QuestionsAndAnswerProps {
  productId: string
  questions: API.QuestionResponse
}

interface Form {
  title: string
  description: string
}

export const QuestionsAndAnswer: React.FC<QuestionsAndAnswerProps> = (props) => {
  const { productId, questions: data } = props
  const { enqueueSnackbar } = useSnackbar()
  const { register, handleSubmit } = useForm<Form>()
  const onError = (e: any) => enqueueSnackbar(e, { variant: "warning" })

  const [muAsk] = useMutation(askQuestion, {
    onError(e) {
      onError(e)
    },
    onSuccess() {
      enqueueSnackbar("Ask successfully")
      queryCache.invalidateQueries("getQuestions")
    },
  })

  const onSubmit = (data: Form) => {
    muAsk({
      title: data?.title,
      decriptions: data?.description,
      productId: productId,
    })
  }

  return (
    <div className="pr-24 text-gray-700 ">
      <p className={cx(typography.h4)}>Questions and Answers:</p>

      <div className="w-full px-8 py-12 pt-8 my-12 bg-white rounded-lg shadow-card">
        {data?.result?.items?.map((v) => {
          return <Question key={v.id} question={v} />
        })}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full px-8 mt-24 mb-2">
            <div className="flex">
              <div className="w-full pr-8">
                <input
                  className="w-full p-4 mb-8 mr-0 text-gray-800 bg-white border-t border-b border-l border-r border-gray-300 rounded-l-lg"
                  placeholder="Title"
                  name="title"
                  ref={register({ required: true })}
                />
                <input
                  className="w-full p-4 mr-0 text-gray-800 bg-white border-t border-b border-l border-r border-gray-300 rounded-l-lg"
                  placeholder="Details.."
                  name="description"
                  ref={register({ required: true })}
                />
              </div>
              <div className="items-center justify-center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="relative top-8"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export interface QuestionModel {
  question: API.QuestionItem
}

const Question: React.FC<QuestionModel> = ({ question }) => {
  const like = 1
  return (
    <div className="flex my-4 mb-12">
      <div className="ml-12 mr-12 text-center">
        <p className={cx(typography.h4, "my-4")}>{like}</p>
        <p>Like</p>
      </div>

      <div className="pt-4 ">
        <p className="font-bold text-purple-700">{question?.title}</p>
        <br />
        <p>{question?.decriptions}</p>
      </div>
    </div>
  )
}
