import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FormField, FormTypes } from '../Fields'
import { NextButton, SubmitButton } from '../Buttons'

const fields = [
  {
    type: FormTypes.INPUT,
    name: 'email',
    label: 'Endereço de e-mail',
    formType: 'email',
    validator: Yup.string()
      .email('Endereço de e-mail inválido')
      .required('Não pode ser deixado em branco'),
    placeholder: 'maria@gedaam.org',
    autoComplete: 'email'
  },
  {
    type: FormTypes.INPUT,
    name: 'register',
    label: 'Registro acadêmico',
    formType: 'text',
    validator: Yup.string()
      .matches(/^[0-9]{4,20}$/, {
        message: 'Deve ser um número inteiro, sem pontos ou traços, entre 4 e 20 caracteres'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: `${new Date().getFullYear()}000000`,
    inputMode: 'numeric'
  }
]
export default function SubscriptionForm() {
  const [activeFieldIndex, setActiveFieldIndex] = useState(0)

  const advanceForm = () => setActiveFieldIndex(previous => previous + 1)
  const recedeForm = () => setActiveFieldIndex(previous => previous - 1)

  const onSubmit = () => {
    setTimeout(alert('http-request'), 2000)
  }

  const keyPressHandler = isSubmitting => {
    if (!isSubmitting && activeFieldIndex >= fields.length - 1) onSubmit()
    advanceForm()
  }

  return (
    <Formik
      initialValues={fields.reduce((values, { name, initialValue }) => {
        values[name] = initialValue || ''
        return values
      }, {})}
      validationSchema={Yup.object(
        fields.reduce((schema, { name, validator }) => {
          schema[name] = validator
          return schema
        }, {})
      )}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          {fields.map((properties, i) => {
            return (
              // changing state will cause every field to re-render, which is not optimal
              <FormField
                key={`input-${i + 1}`}
                className={i !== activeFieldIndex ? 'hidden' : ''}
                autoFocus={i === activeFieldIndex}
                keyPressHandler={keyPressHandler}
                isSubmitting={isSubmitting}
                {...properties}
              >
                <div className="flex justify-between">
                  {activeFieldIndex >= fields.length - 1 ? (
                    <SubmitButton isSubmitting={isSubmitting}>Enviar</SubmitButton>
                  ) : (
                    <NextButton onClick={advanceForm}>Ok</NextButton>
                  )}
                  {activeFieldIndex > 0 && (
                    <NextButton className="opacity-75 hover:opacity-100" onClick={recedeForm}>
                      &lt;
                    </NextButton>
                  )}
                </div>
              </FormField>
            )
          })}
        </Form>
      )}
    </Formik>
  )
}
