import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { addUser } from "../features/user/userSlice"
import { useNavigate } from "react-router-dom"

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(6, "Name is too short")
    .matches(
      /^[a-zA-Z].*/,
      "Name couldn't contain special characters and numbers"
    ),
  email: Yup.string().email("Email must be a valid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password is too Short")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/,
      "Password must at least contain one lowercase, one uppercase, one number, and one symbol"
    ),
})

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    dispatch(
      addUser({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
    navigate("/users")
  }

  return (
    <div className="">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <div className="mx-auto rounded-md shadow-sm bg-slate-300 py-8 px-4 w-1/3">
            <Form>
              <h2 className="text-2xl text-center font-bold">Register</h2>
              <div className="flex-row p-2">
                <div className="flex-row mb-3">
                  <label htmlFor="name" className="text-lg font-medium">
                    Name
                  </label>
                  <Field
                    type="name"
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="text-lg bg-slate-100 rounded-md my-1 px-3 py-1 w-full"
                  />
                  <ErrorMessage
                    name="name"
                    className="text-sm text-red-400 font-medium"
                    component="span"
                  />
                </div>
                <div className="flex-row mb-3">
                  <label htmlFor="email" className="text-lg font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Email"
                    className="text-lg bg-slate-100 rounded-md my-1 px-3 py-1 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-sm text-red-400 font-medium"
                    component="span"
                  />
                </div>
                <div className="flex-row mb-3">
                  <label htmlFor="password" className="text-lg font-medium">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Password"
                    className="text-lg bg-slate-100 rounded-md my-1 px-3 py-1 w-full"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-sm text-red-400 font-medium"
                    component="span"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-black text-white shadow-md rounded-lg mb-2 px-4 py-2 font-bold"
                >
                  Join
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}
