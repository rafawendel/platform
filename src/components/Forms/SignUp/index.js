import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextInput } from '../Fields/Inputs'

export default function SignupForm({ colorMode }) {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email addresss`').required('Required')
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise(r => setTimeout(r, 500))
        setSubmitting(false)
      }}
    >
      <Form>
        <TextInput label="First Name" name="firstName" type="text" placeholder="Jane" />
        <TextInput label="Last Name" name="lastName" type="text" placeholder="Doe" />
        <TextInput label="Email Address" name="email" type="email" placeholder="jane@formik.com" />
        <div className="text-center mt-6">
          <button
            className={`${
              colorMode === 'dark' ? 'bg-darker text-light' : 'bg-dark text-lighter'
            } active:opacity-75 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1`}
            type="submit"
          >
            Inscrever-se
          </button>
        </div>
      </Form>
    </Formik>
  )
}
