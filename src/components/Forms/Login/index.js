import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextInput } from '../Fields'

export default function LoginForm({ colorMode, onSubmit }) {
  return (
    <Formik
      initialValues={{
        email: '',
        register: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Endereço de e-mail inválido')
          .required('Não pode ser deixado em branco'),
        register: Yup.string()
          .matches(/^[0-9]{4,20}$/, {
            message: 'Deve ser um número inteiro, sem pontos ou traços, entre 4 e 20 caracteres'
          })
          .required('Não pode ser deixado em branco')
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput
            label="Endereço de e-mail"
            name="email"
            type="email"
            placeholder="maria@gedaam.org"
            autoComplete="email"
            autoFocus
            required
          />
          <TextInput
            label="Registro Acadêmico"
            name="register"
            type="text"
            inputMode="numeric"
            tooltip={{
              content: 'Seu número de matrícula',
              type: 'dark',
              effect: 'float',
              place: 'top'
            }}
            placeholder={`${new Date().getFullYear()}000000`}
            aria-describedby="Um número inteiro, sem pontos ou traços, entre 4 e 20 caracteres"
            required
          />
          <div className="text-center mt-6">
            <button
              className={`${
                colorMode === 'dark' ? 'bg-darker text-light' : 'bg-dark text-lighter'
              } active:opacity-75 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg`}
              type="submit"
              disabled={isSubmitting}
            >
              Entrar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
