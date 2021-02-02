import * as Yup from 'yup'
import { FormTypes } from '../../components/forms/TypingForm/FormField'
import { validateCPFAsync } from '../../utils/cpf'

export const primary = [
  {
    title: 'Bem vindo!',
    innerHTML: `Bem-vindo ao GEDAAM.
    <br/>Este é o formulário de inscrição para o Grupo e deve tomar 6 a 10 minutos.
    <br/><br/>Para uma experiência ótima, use o computador. Você pode passar os campos com "enter" e usar as setas do teclado para selecionar as opções.
  `
  },
  {
    type: FormTypes.INPUT,
    name: 'name',
    label: 'Primeiramente, como você se chama?',
    description: 'Seu nome completo',
    formType: 'text',
    validator: Yup.string().required('Não pode ser deixado em branco'),
    placeholder: 'Jayden Smith',
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
    notAllowedCharRegex: '[^0-9]',
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
      { label: 'Não-binário', value: 'nonbinary' },
      { label: 'Prefiro não identificar', value: 'n/a' }
    ],
    validator: Yup.string().oneOf(['male', 'female', 'nonbinary', 'n/a']).required()
  },
  {
    type: FormTypes.INPUT,
    name: 'cpf',
    label: 'Qual é o seu CPF?',
    description: 'Será usado para certificação',
    formType: 'text',
    notAllowedCharRegex: '[^0-9]',
    validator: Yup.string()
      .matches(/^[0-9]{11}$/, {
        message: 'Um número inteiro de 11 dígitos, sem pontos ou traços'
      })
      .test('CPF válido', 'O CPF inserido é inválido', async cpf =>
        validateCPFAsync(cpf)
          .catch(() => false)
          .then(v => v === 'Valid CPF')
      )
      .required('Não pode ser deixado em branco'),
    placeholder: '12312312300'
  },
  {
    type: FormTypes.INPUT,
    name: 'phoneNumber',
    label: 'Qual é o seu número de celular?',
    description: 'Seu coordenador entrará em contato via WhatsApp',
    formType: 'tel',
    notAllowedCharRegex: '[^0-9]',
    validator: Yup.string()
      .matches(/^[0-9]{11}$/, {
        message: 'Não esqueça o nono digíto e o DDD. Não precisamos de espaços ou traços 😉'
      })
      .required('Não pode ser deixado em branco'),
    placeholder: '319XXXXXXXX'
  },
  {
    type: FormTypes.AUTOCOMPLETE,
    name: 'course',
    label: 'Qual é o seu curso?',
    description: 'Curso em que você está matriculado',
    formType: 'text',
    options: [
      { label: 'Medicina', value: 'medicina' },
      { label: 'Enfermagem', value: 'enfermagem' },
      { label: 'Psicologia', value: 'psicologia' }
    ],
    validator: Yup.string().required('Não pode ser deixado em branco'),
    placeholder: 'Medicina'
  },
  {
    type: FormTypes.AUTOCOMPLETE,
    name: 'college',
    label: 'E onde você está cursando?',
    description: 'A sua faculdade ou universidade',
    formType: 'text',
    options: [
      { label: 'UFMG', value: 'UFMG' },
      { label: 'UniBH', value: 'UniBH' },
      { label: 'UFVJM', value: 'UFVJM' },
      { label: 'Unipam', value: 'Unipam' },
      { label: 'FCMMG', value: 'FCMMG' },
      { label: 'PUC', value: 'PUC' },
      { label: 'Unifenas', value: 'Unifenas' },
      { label: 'Faminas', value: 'Faminas' },
      { label: 'FASEH', value: 'FASEH' },
      { label: 'UEMG', value: 'UEMG' },
      { label: 'Suprema', value: 'Suprema' },
      { label: 'Outra', value: 'outro' }
    ],
    placeholder: 'Sua faculdade',
    initialValue: 'UFMG',
    validator: Yup.string().required('Não pode ser deixado em branco')
  },
  {
    type: FormTypes.INPUT,
    name: 'otherCollege',
    label: 'Especifique',
    formType: 'text',
    onlyDisplayIf: ({ college }) => college === 'outro',
    placeholder: (() => {
      const rnd = Math.random()
      return rnd >= 2 / 3 ? 'UFMG' : rnd >= 1 / 3 ? 'UniBH' : 'UFVJM'
    })()
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
    initialValue: '1',
    placeholder: 'Seu período',
    validator: Yup.string().required()
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
    onlyDisplayIf: ({ isNewbie }) => isNewbie === 'false', // a conditional element can never be the last element
    notAllowedCharRegex: '[^0-9]',
    formType: 'number',
    min: 0,
    placeholder: '0'
  },
  {
    type: FormTypes.DROPDOWN,
    name: 'medium',
    label: 'Como você chegou até o GEDAAM?',
    options: [
      { label: 'Instagram', value: 'Instagram' },
      { label: 'WhatsApp', value: 'WhatsApp' },
      { label: 'Facebook', value: 'Facebook' },
      { label: 'Recepção de calouros', value: 'Recepção de calouros' },
      { label: 'Eventos do GEDAAM', value: 'Eventos do GEDAAM' },
      { label: 'Outros eventos', value: 'Outros eventos' },
      { label: 'Colegas', value: 'Colegas' },
      { label: 'Amostra do DAAB', value: 'Amostra do DAAB' }
    ],
    placeholder: 'De onde você nos conhece',
    initialValue: 'Eventos do GEDAAM'
  },
  {
    type: FormTypes.CHECKBOX,
    name: 'topicsOfInterest',
    label: 'Quais dos seguintes tópicos você gostaria de uma abordagem no seu percurso GEDAAM?',
    description: 'Isso poderá ser usado para orientação do seu coordenador',
    options: [
      { label: 'Apresentações', value: 'Apresentações' },
      { label: 'Oratória', value: 'Oratória' },
      { label: 'Organização', value: 'Organização' },
      { label: 'Gestão do tempo', value: 'Gestão do tempo' },
      { label: 'Técnicas de estudos', value: 'Técnicas de estudos' },
      { label: 'Liderança', value: 'Liderança' },
      { label: 'Raciocínio clínico', value: 'Raciocínio clínico' },
      { label: 'Dinâmicas de grupo', value: 'Dinâmicas de grupo' },
      { label: 'Tutoria e orientação', value: 'Tutoria e orientação' },
      { label: 'Saúde mental', value: 'Saúde mental' }
    ].sort(() => Math.random() > 0.5),
    initialValue: [],
    validator: Yup.array()
  },
  {
    title: 'Seleção de grupo',
    innerHTML: `Agora você poderá se inscrever em um grupo do GEDAAM.
    <br/>Esteja atenta, só é possível selecionar <strong>2 opções</strong>, que devem ser posicionadas por <strong>prioridade</strong>.
    <br/><br/>Para fazer isso, basta arrastar os cartões pela borda esquerda até a lista no topo.
    <br/><br/>
    <div style="display: flex; justify-content: center;">
    <img src="" />
    </div>
    <br/>Ao <b>tocar ou clicar</b> sobre uma opção você poderá ver os <b>detalhes</b> sobre a turma.
  `
  }
  // {
  //   type: FormTypes.DRAG_AND_DROP,
  //   name: 'selectedGroup',
  //   options: getLists(),
  //   validator: Yup.array()
  //     .min(1, 'Selecione ao menos uma opção')
  //     .max(2)
  //     .required('Selecione ao menos uma opção')
  // }
]
