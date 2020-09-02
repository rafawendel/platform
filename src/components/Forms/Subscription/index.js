import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FormField, FormTypes } from '../Fields'
import { PrimaryActionButton, SubmitButton, SecondaryActionButton } from '../Buttons'
import { validateCPFAsync } from '../../../utils/cpf'

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
    type: FormTypes.RADIO,
    name: 'sex',
    label: 'Com qual gênero você se identifica?',
    formType: 'radio',
    initialValue: 'male',
    options: [
      { label: 'Feminino', value: 'female' },
      { label: 'Masculino', value: 'male' },
      { label: 'Não-binário', value: 'nonbinary' }
    ],
    validator: Yup.string().oneOf(['male', 'female', 'nonbinary']).required()
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
      // .test(
      //   'CPF válido',
      //   'O CPF inserido é inválido',
      //   async cpf => (await validateCPFAsync(cpf)) === 'Valid CPF'
      // )
      .required('Não pode ser deixado em branco'),
    placeholder: '11111111111'
  },
  {
    type: FormTypes.INPUT,
    name: 'phoneNumber',
    label: 'Qual é o seu número de celular?',
    description: 'Seu coordenador entrará em contato via WhatsApp',
    formType: 'tel-national',
    validator: Yup.string()
      .matches(/^[0-9]{11}$/, {
        message: 'Não esqueça o nono digíto e o DDD. Não precisamos de espaços ou traços 😉'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: '319XXXXXXXX'
  },
  {
    type: FormTypes.INPUT,
    name: 'course',
    label: 'Qual é o seu curso?',
    description: 'Curso em que você está matriculado',
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
    placeholder: 'UFMG'
    // () => {
    //   const rnd = Math.random()
    //   return rnd >= 1 / 3 ? 'UFMG' : rnd <= 2 / 3 ? 'UniBH' : 'UFVJM'
    // }
  },
  {
    type: FormTypes.RADIO,
    name: 'isRegular',
    label: 'Você está regular?',
    options: [
      { label: 'Estou regular', value: 'true' },
      { label: 'Estou irregular', value: 'false' }
    ],
    initialValue: 'true',
    formType: 'text',
    validator: Yup.string().oneOf(['true', 'false']).required()
  },
  {
    type: FormTypes.DROPDOWN,
    name: 'semester',
    label: 'Qual é o período em que você faz a maioria das matérias?',
    description: 'Seu período ou semestre',
    formType: 'text',
    inputMode: 'numeric',
    validator: Yup.string()
      .matches(/^[0-9]{1}$/, {
        message: 'Somente números'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: '1'
  },
  {
    type: FormTypes.INPUT,
    name: 'knewGedaam',
    label: 'Você já conhecia o GEDAAM?',
    formType: 'text',
    validator: Yup.string().required('Não pode ser deixado em branco')
  }
]
export default function SubscriptionForm() {
  const [activeFieldIndex, setActiveFieldIndex] = useState(0)

  const advanceForm = () => setActiveFieldIndex(previous => previous + 1)
  const recedeForm = () => setActiveFieldIndex(previous => previous - 1)

  const onSubmit = values => {
    setTimeout(() => {
      alert(JSON.stringify(values))
    }, 2)
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
          {fields.map((properties, i) => (
            // changing state will cause every field to re-render, which is not optimal
            <FormField
              key={properties.id || properties.name}
              className={i !== activeFieldIndex ? 'hidden' : ''}
              keyPressHandler={keyPressHandler}
              isSubmitting={isSubmitting}
              autoFocus={i === 0}
              showSubmitButton={activeFieldIndex >= fields.length - 1}
              showRecedeButton={activeFieldIndex > 0}
              advanceForm={advanceForm}
              recedeForm={recedeForm}
              {...properties}
            />
          ))}
        </Form>
      )}
    </Formik>
  )
}
