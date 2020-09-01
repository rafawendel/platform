import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FormField, FormTypes } from '../Fields'
import { NextButton, SubmitButton } from '../Buttons'

const fields = [
  {
    type: FormTypes.INPUT,
    name: 'name',
    label: 'Primeiramente, como você se chama?',
    description: 'Seu nome completo',
    formType: 'text',
    validator: Yup.string().required('Não pode ser deixado em branco'),
    placeholder: 'José Silva',
    autoComplete: 'name'
  },
  {
    type: FormTypes.INPUT,
    name: 'email',
    label: 'Qual é o seu melhor e-mail?',
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
    label: 'Qual é o seu Registro Acadêmico?',
    description: 'Seu número de matrícula, sem pontos ou traços',
    formType: 'text',
    inputMode: 'numeric',
    validator: Yup.string()
      .matches(/^[0-9]{4,20}$/, {
        message: 'Um número inteiro, sem pontos ou traços, entre 4 e 20 caracteres'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: ''
  },
  {
    type: FormTypes.INPUT,
    name: 'sex',
    label: 'Sexo',
    description: 'Seu nome completo',
    formType: 'text',
    validator: Yup.string().required('Não pode ser deixado em branco'),
    placeholder: 'José Silva'
  },
  {
    type: FormTypes.INPUT,
    name: 'cpf',
    label: 'Qual é o seu CPF?',
    description: 'Será usado para certificação',
    formType: 'text',
    validator: Yup.string()
      .matches(/^[0-9]{11}$/, {
        message: 'Um número inteiro de 11 dígitos, sem pontos ou traços'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: ''
  },
  {
    type: FormTypes.INPUT,
    name: 'phoneNumber',
    label: 'Qual é o seu número de celular?',
    description: 'Seu coordenador entrará em contato via WhatsApp',
    formType: 'tel',
    validator: Yup.string()
      .matches(/^[0-9]{11}$/, {
        message: 'Não esqueça o nono digíto e o DDD. Não precisamos de espaços ou traços 😉'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: ''
  },
  {
    type: FormTypes.INPUT,
    name: 'course',
    label: 'Qual é o seu curso?',
    description: 'Curso em que você está regularmente matriculado',
    formType: 'text',
    validator: Yup.string().required('Não pode ser deixado em branco'),
    placeholder: 'Medicina'
  },
  {
    type: FormTypes.INPUT,
    name: 'college',
    label: 'E onde você está cursando?',
    description: 'A sua faculdade ou universidade',
    formType: 'text',
    validator: Yup.string().required('Não pode ser deixado em branco'),
    placeholder: ''
  },
  {
    type: FormTypes.INPUT,
    name: 'semester',
    label: 'Qual é o período em que você faz a maioria das matérias?',
    description: 'Seu período ou semestre',
    formType: 'number',
    validator: Yup.string()
      .matches(/^[0-9]{1}$/, {
        message: 'Não esqueça o nono digíto e o DDD. Não precisamos de espaços ou traços 😉'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: ''
  },
  {
    type: FormTypes.INPUT,
    name: 'semester',
    label: 'Você já conhecia o GEDAAM?',
    formType: 'text',
    validator: Yup.string()
      .matches(/^[0-9]$/, {
        message: 'Não esqueça o nono digíto e o DDD. Não precisamos de espaços ou traços 😉'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: ''
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
                autoFocus={!!(i === activeFieldIndex)}
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
