import cx from "classnames"
import { useSnackbar } from "notistack"
import * as React from "react"
import { useForm } from "react-hook-form"
import { images } from "theme"
import { immer, persist, strings } from "utils"
import create from "zustand"
import { useAccountStore } from "zustands"

interface FormState {
  isOpen: boolean
  toggleForm: () => void
  openForm: (open?: boolean) => void
}

const [useFormModal] = create<FormState>(
  persist("loginFormState")(
    immer((set: any, get: any) => ({
      isOpen: false,
      toggleForm: () => {
        set((state: FormState) => {
          state.isOpen = !state.isOpen
        })
      },
      openForm: (open = true) => {
        set((state: FormState) => {
          state.isOpen = open
        })
      },
    })),
  ),
)

const LoginFormModal = () => {
  const { isOpen, openForm } = useFormModal()
  const [isLoginForm, setIsLoginForm] = React.useState<boolean>(true)
  const { register, handleSubmit } = useForm()
  const { login, signUp } = useAccountStore()
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = async (data) => {
    try {
      const apiMethod = isLoginForm ? login : signUp
      const rs = await apiMethod(data)
      if (rs) {
        localStorage.setItem(strings.token, rs.token)
        openForm(false)
      }
    } catch (error) {
      enqueueSnackbar(JSON.stringify(error), { variant: "error" })
    }
  }

  return (
    <div
      className={cx(
        "fixed top-0 left-0 flex items-center justify-center w-full h-full modal z-50 ",
        {
          "opacity-0": !isOpen,
          "pointer-events-none": !isOpen,
          "modal-active": isOpen,
        },
      )}
    >
      <div
        className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        onClick={() => openForm(false)}
      />
      <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-3xl">
        {/*Body*/}
        <div className="container flex h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow xl:max-w-3xl">
          <div className="relative flex items-center hidden inline-block align-middle xl:block xl:w-1/2 ">
            <div className="flex items-center w-full h-full">
              <img
                className="self-center object-cover w-full my-auto "
                src={images.cele}
                alt="my zomato"
              />
            </div>
          </div>
          <div className="w-full p-8 xl:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-4 text-2xl font-bold">
                Sign {isLoginForm ? "in to your account" : "up"}
              </h1>

              {isLoginForm ? (
                <>
                  <div>
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <span
                      className="text-sm font-semibold text-gray-700 cursor-pointer "
                      onClick={() => setIsLoginForm((p) => !p)}
                    >
                      Sign up
                    </span>
                  </div>
                </>
              ) : null}

              <div className="mt-6 mb-4">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
                <input
                  className="w-full h-10 px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Your email address"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>

              {!isLoginForm && (
                <div className="mt-6 mb-4">
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
                  <input
                    className="w-full h-10 px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    ref={register({ required: true })}
                  />
                </div>
              )}

              <div className="mt-6 mb-6">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
                <input
                  className="w-full h-10 px-3 py-2 mb-1 mb-4 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true })}
                />

                {isLoginForm ? (
                  <a
                    className="inline-block text-sm text-gray-600 align-baseline hover:text-gray-800"
                    href="/forgot"
                  >
                    Forgot Password?
                  </a>
                ) : (
                  <div
                    className="flex justify-end w-full cursor-pointer"
                    onClick={() => setIsLoginForm(true)}
                  >
                    <p className="inline-block text-sm text-gray-600 align-right hover:text-gray-800 text-right font-bold">
                      Sign in
                    </p>
                  </div>
                )}
              </div>

              <div className="flex w-full mt-8">
                <button
                  className="w-full h-10 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded hover:bg-grey-900 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign {isLoginForm ? "in" : "up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { LoginFormModal, useFormModal }
