import * as Yup from 'yup'
import { FormTypes } from '../Fields'
import { validateCPFAsync } from '../../../utils/cpf'
import { getGroups } from './groups'

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
      { label: 'Não-binário', value: 'nonbinary' },
      { label: 'Prefiro não identificar', value: 'n/a' }
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
          .catch(() => false)
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
    validator: Yup.string()
      .matches(/^[0-9]{1,2}$/)
      .required(),
    placeholder: 'Seu período'
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
    onlyDisplayIf: values => values.isNewbie === 'false', // a conditional element can never be the last element
    formType: 'number',
    min: 0,
    validator: Yup.string()
      .matches(/^[0-9]{1,2}$/, {
        message: 'Um número inteiro'
      })
      .required('Não pode ser deixado em branco'),
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
    ]
  },
  {
    type: FormTypes.DROPDOWN,
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
    ] /* ,
    withValuesOptionsCb: (_, options) => {
      return options.sort(() => Math.random() > 0.5)
    } */
  },
  {
    type: FormTypes.DRAG_AND_DROP,
    name: 'selectedGroup',
    options: getGroups(),
    // withValuesOptionsCb: (values, options) => {
    //   // here add the logic that changes the options according to the values
    //   return options
    // },
    validator: Yup.array().min(2, 'Selecione duas opções').required()
  }
]
export const research = [
  // The groups go here
  {
    type: FormTypes.CHECKBOX,
    name: 'ingressoFaculdade',
    label: 'Qual foi a sua forma de ingresso na faculdade?',
    options: [
      { label: 'Ampla concorrência', value: 'ampla' },
      { label: 'Cota para estudante de escola pública', value: 'cota_escola' },
      { label: 'Cota para renda mensal menor que 1,5 salários', value: 'cota_renda' },
      { label: 'Cota para negros, pardos, indígenas e deficientes', value: 'cota_racial' }
    ],
    initialValue: []
  },
  {
    type: FormTypes.INPUT,
    name: 'birthdate',
    label: 'Qual é a sua data de nascimento?',
    formType: 'date',
    initialValue: new Date().toLocaleDateString(),
    validator: Yup.string().required('Não pode ser deixado em branco')
  },
  {
    type: FormTypes.RADIO,
    name: 'color',
    label: 'Com qual cor você se identifica?',
    options: [
      { label: 'Branca', value: 'branca' },
      { label: 'Negra', value: 'negra' },
      { label: 'Parda', value: 'parda' },
      { label: 'Outras', value: 'outra' }
    ],
    initialValue: 'negra'
  },
  {
    type: FormTypes.RADIO,
    name: 'sexualOrientation',
    label: 'Qual a sua orientação afetivo-sexual?',
    options: [
      { label: 'Bissexual', value: 'bi' },
      { label: 'Heterossexual', value: 'hetero' },
      { label: 'Homossexual', value: 'homo' },
      { label: 'Assexual', value: 'assex' }
    ]
  },
  {
    type: FormTypes.RADIO,
    name: 'income',
    label: 'Qual a renda mensal per capita sua família?',
    description: 'Uma aproximação de quanto em salários mínimos por pessoa a sua família produz',
    options: [
      { label: 'Menos de um salário mínimo (R$ 1.045,00)', value: '<1' },
      { label: 'Entre 1 e 3 salários (R$R$ 1.045,00 até R$3.135,00)', value: '1-3' },
      { label: 'Entre 3 e 5 salários (R$3.136,00 até R$5.225,00)', value: '3-5' },
      { label: 'Maior que 5 salários (R$5.225,00)', value: '>5' }
    ]
  },
  {
    type: FormTypes.RADIO,
    name: 'city',
    label: 'De qual região você vem?',
    description: 'Sua região de origem',
    options: [
      { label: 'Belo Horizonte', value: 'bh' },
      { label: 'Região metropolitana de Belo Horizonte', value: 'grande_bh' },
      { label: 'Minas Gerais', value: 'mg' },
      { label: 'Outro estado, na Região Sudeste', value: 'se' },
      { label: 'Outra', value: 'outro' }
    ]
  },

  //   TÉCNICAS DE ESTUDOS E ATIVIDADES EXTRACURRICULARES (incluir essa porra aqui)
  // Quais técnicas de estudo você utiliza? (marque mais de uma opção se necessário)

  // tá faltando um krl de pergunta aqui

  {
    type: FormTypes.RADIO,
    name: 'methodEvaluation',
    label: 'Considerando a técnica que você mais utiliza, como você a avalia?',
    options: [
      { label: 'Muito ineficiente', value: '1' },
      { label: 'Ineficiente', value: '2' },
      { label: 'Nem ineficiente nem eficiente', value: '3' },
      { label: 'Eficiente', value: '4' },
      { label: 'Muito eficiente', value: '5' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.SLIDER,
    name: 'studyHours',
    label:
      'Quantas horas, por semana, você dedica para estudo, excetuando o tempo em sala de aula?',
    description: 'O tempo de estudo extraclasse, em horas',
    options: {
      min: 0,
      max: 10,
      step: 0.5,
      minLabel: '0 horas',
      maxLabel: '10 ou mais horas',
      unity: 'horas'
    }
  },

  // bem confuso
  {
    type: FormTypes.RADIO,
    name: 'timeManagement',
    label: 'Considerando a técnica que você mais utiliza, como você a avalia?',
    options: [
      { label: 'Muito ruim', value: '1' },
      { label: 'Ruim', value: '2' },
      { label: 'Nem boa, nem ruim', value: '3' },
      { label: 'Boa', value: '4' },
      { label: 'Muito boa', value: '5' }
    ],
    initialValue: '3',
    formType: 'radio',
    validator: Yup.string().oneOf(['true', 'false']).required()
  },
  {
    type: FormTypes.RADIO,
    name: 'extracurricular',
    label: 'Você participa de algum grupo na faculdade?',
    description: 'Ligas acadêmicas, grupos de estudo, atléticas, charangas, etc',
    options: [
      { label: 'Sim', value: 'true' },
      { label: 'Não', value: 'false' }
    ]
  },

  //   EXPECTATIVAS
  // Baseado em suas expectativas ao ingressar no GEDAAM, indique quais contribuíram para a sua inscrição e o 'Quanto foi a contribuição. Marque sua resposta em uma escala de (0) a (5), considerando um contínuo “entre não contribuiu” e “contribuiu muito”. Não existem respostas certas ou erradas. Suas respostas são confidenciais. Por favor, não deixe itens em branco

  {
    type: FormTypes.RADIO,
    name: 'expectations1',
    label: 'Possibilidade de aquisição de novos saberes a partir da experiência do outro',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations2',
    label: 'Fazer amizades',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations3',
    label: 'Adquirir conhecimento',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations4',
    label: 'Fazer networking',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations5',
    label: 'Preparação para o mercado de trabalho',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations6',
    label: 'Melhorar o desempenho dentro da faculdade',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations7',
    label: 'Melhorar o desempenho fora da faculdade',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations8',
    label: 'Passar na residência',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations9',
    label: 'Ter mais chances de aprender',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations10',
    label: 'Certificação',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations11',
    label: 'Auxílio à saúde mental',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations12',
    label: 'Aprimorar o currículo',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },
  {
    type: FormTypes.RADIO,
    name: 'expectations13',
    label: 'Desenvolvimento social e pessoal',
    options: [
      { label: 'Contribuiu muito', value: '5' },
      { label: 'Contribuiu na maior parte', value: '4' },
      { label: 'Contribuiu parcialmente', value: '3' },
      { label: 'Contribuiu pouco', value: '2' },
      { label: 'Não contribuiu', value: '1' }
    ],
    initialValue: '3'
  },

  // AUTOEFICÁCIA

  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy1',
    label: 'Quanto eu sou capaz de aprender os conteúdos que são necessários à minha formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy2',
    label:
      'Quanto eu sou capaz de utilizar estratégias cognitivas para facilitar minha aprendizagem?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy3',
    label:
      'Quanto eu sou capaz de demonstrar, nos momentos de avaliação, o que aprendi durante meu curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy4',
    label: 'Quanto eu sou capaz de entender as exigências do meu curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy5',
    label:
      'Quanto eu sou capaz de expressar minha opinião quando outro colega de sala discorda de mim?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy6',
    label:
      'Quanto eu sou capaz de pedir ajuda, quando necessário, aos colegas nas atividades do curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy7',
    label:
      'Quanto eu sou capaz de reivindicar atividades extracurriculares relevantes para a minha formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy8',
    label: 'Quanto eu sou capaz de planejar ações para atingir minhas metas profissionais?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy9',
    label: 'Quanto eu sou capaz de refletir sobre a realização de minhas metas de formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy10',
    label:
      'Quanto eu sou capaz de selecionar, dentre os recursos oferecidos pela instituição, o mais apropriado à minha formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy11',
    label:
      'Quanto eu sou capaz de aplicar o conhecimento aprendido no curso em situações práticas?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy12',
    label:
      'Quanto eu sou capaz de estabelecer condições para o desenvolvimento dos trabalhos solicitados pelo curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy13',
    label: 'Quanto eu sou capaz de trabalhar em grupo?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy14',
    label: 'Quanto eu sou capaz de compreender os conteúdos abordados no curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy15',
    label:
      'Quanto eu sou capaz de manter-me atualizado sobre as novas tendências profissionais na minha área de formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy16',
    label: 'Quanto eu sou capaz de tomar decisões relacionadas à minha formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy17',
    label: 'Quanto eu sou capaz de cooperar com os colegas nas atividades do curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy18',
    label: 'Quanto eu sou capaz de esforçar-me nas atividades acadêmicas?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy19',
    label:
      'Quanto eu sou capaz de definir, com segurança, o que pretendo seguir dentre as diversas possibilidades de atuação profissional que existem na minha área de formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy20',
    label:
      'Quanto eu sou capaz de procurar auxílio dos professores para o desenvolvimento de atividades do curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy21',
    label: 'Quanto eu sou capaz de motivar-me para fazer as atividades ligadas ao curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy22',
    label: 'Quanto eu sou capaz de estabelecer minhas metas profissionais?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy23',
    label: 'Quanto eu sou capaz de estabelecer bom relacionamento com meus professores?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy24',
    label: 'Quanto eu sou capaz de cumprir o desempenho exigido para a aprovação no curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy25',
    label: 'Quanto eu sou capaz de contribuir com ideias para a melhoria do meu curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy26',
    label: 'Quanto eu sou capaz de terminar trabalhos do curso dentro do prazo estabelecido?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy27',
    label: 'Quanto eu sou capaz de planejar a realização das atividades solicitadas pelo curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy28',
    label: 'Quanto eu sou capaz de perguntar quando tenho dúvida?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy29',
    label: 'Quanto eu sou capaz de estabelecer amizades com os colegas do curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy30',
    label: 'Quanto eu sou capaz de atualizar os conhecimentos adquiridos no curso?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy31',
    label: 'Quanto eu sou capaz de resolver problemas inesperados relacionados à minha formação?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy32',
    label: 'Quanto eu sou capaz de preparar-me para as avaliações?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy33',
    label:
      'Quanto eu sou capaz de aproveitar as oportunidades de participar em atividades extracurriculares?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy34',
    label:
      'Quanto eu sou capaz de buscar informações sobre os recursos ou programas oferecidos pela minha instituição?',
    options: {
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Totalmente incapaz',
      maxLabel: 'Totalmente capaz'
    },
    initialValue: 5
  }
]
