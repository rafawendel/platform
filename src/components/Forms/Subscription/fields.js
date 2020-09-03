import { FormTypes } from '../Fields'

const getGroupOptions = () => {}

export const fields = [
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
      .test('CPF válido', 'O CPF inserido é inválido', async cpf =>
        validateCPFAsync(cpf)
          .catch(_e => false)
          .then(v => v === 'Valid CPF')
      )
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
    placeholder: () => {
      const rnd = Math.random()
      return rnd >= 2 / 3 ? 'UFMG' : rnd >= 1 / 3 ? 'UniBH' : 'UFVJM'
    }
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
    formType: 'radio',
    validator: Yup.string().oneOf(['true', 'false']).required()
  },
  {
    type: FormTypes.DROPDOWN,
    name: 'semester',
    label: 'Qual é o período em que você faz a maioria das matérias?',
    description: 'Seu período ou semestre',
    options: [...Array(12).keys()].map(i => ({
      label: `${i + 1}° período`,
      value: `${i + 1}`
    })),
    formType: 'radio',
    validator: Yup.string()
      .matches(/^[0-9]{1,2}$/)
      .required(),
    placeholder: 'Seu período'
  },
  {
    type: FormTypes.CHECKBOX,
    name: 'isNewbie',
    label: 'Você é novato no GEDAAM?',
    options: [
      { label: 'Sim, estou conhecendo neste semestre', value: 'first' },
      { label: 'Não, já conhecia o Grupo', value: 'second' }
    ],
    initialValue: [],
    formType: 'checkbox',
    validator: Yup.array()
      .of(Yup.string().oneOf(['zoeira']))
      .required()
  },
  {
    type: FormTypes.RADIO,
    name: 'isNewbie',
    label: 'Você é novato no GEDAAM?',
    options: [
      { label: 'Sim, estou conhecendo neste semestre', value: 'true' },
      { label: 'Não, já conhecia o Grupo', value: 'false' }
    ],
    initialValue: 'false',
    validator: Yup.string().oneOf(['true', 'false']).required()
  },
  {
    type: FormTypes.INPUT,
    name: 'semestersInvolved',
    label: 'Há quantos semestres você tem algum envolvimento com o grupo?',
    description: 'Considere envolvimento a participação como membro, coordenadora ou diretora',
    onlyShowIf: values => values.isNewbie === 'false',
    formType: 'text',
    inputMode: 'numeric',
    validator: Yup.string()
      .matches(/^[0-9]{1,2}$/, {
        message: 'Um número inteiro'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: '0'
  },
  {
    type: FormTypes.INPUT,
    name: 'medium',
    label: 'Como você chegou até o GEDAAM?',
    formType: 'text',
    placeholder: 'Facebook, Recepção de calouros...'
  },
  {
    type: FormTypes.DRAG_AND_DROP,
    name: 'selectedGroup',
    options: getGroupOptions()
  }
]
