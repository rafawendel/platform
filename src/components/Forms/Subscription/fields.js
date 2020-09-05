import * as Yup from 'yup'
import { FormTypes } from '../TypingForm/FormField'
import { validateCPFAsync } from '../../../utils/cpf'
import { getGroups } from './groups'

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
    formType: 'tel',
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
    type: FormTypes.DROPDOWN,
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
      { label: 'Outra', value: 'null' }
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
    onlyDisplayIf: ({ college }) => college === 'null',
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
    initialValue: '1° período',
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
    initialValue: []
  },
  {
    title: 'Seleção de grupo',
    innerHTML: `Agora você poderá se inscrever em um grupo do GEDAAM.
    <br/>Esteja atenta, só é possível selecionar <strong>2 opções</strong>, que devem ser posicionadas por <strong>prioridade</strong>.
    <br/><br/>Para fazer isso, basta arrastar os cartões pela borda esquerda até a lista no topo.
    <br/><br/>Ao <b>tocar ou clicar</b> sobre uma opção você poderá ver os <b>detalhes</b> sobre a turma.
  `
  },
  {
    type: FormTypes.DRAG_AND_DROP,
    name: 'selectedGroup',
    options: getGroups(),
    validator: Yup.array()
      .min(1, 'Selecione ao menos uma opção')
      .max(2)
      .required('Selecione ao menos uma opção')
  }
]

const genMarksArray = (begin, end, step, withLabel) =>
  [...Array(end / step).keys()].map(i => ({
    value: i * step + begin,
    label: withLabel && `${i * step + begin}`
  }))
const array1To10Marks = genMarksArray(1, 10, 1, true)

export const research = [
  {
    title: 'Pesquisa GEDAAM',
    innerHTML: `As perguntas a seguir serão utilizadas anonimamente para análise do perfil demográfico do GEDAAM, com finalidade científica 👨‍🔬.`
  },
  {
    title: 'Termo de consentimento livre e esclarecido',
    innerHTML: `<p>Prezado(a) Estudante(a),</p>
      <br/><p>
      Você esta sendo convidado a participar da pesquisa <strong>MOTIRÕ - GEDAAM</strong>: expectativas, suporte social e auto eficácia de participantes do Grupo de Estudos em Didática Aplicada ao Aprendizado da Medicina. Este estudo tem como objetivo avaliar as repercussões da participação em atividades do GEDAAM na percepção de qualidade de vida, auto eficácia e resiliência de estudantes de medicina da UFMG. 
      </p><br/><p>
      Precisamos saber se realmente o GEDAAM impacta nestes aspectos e como isso acontece. Para isto, gostaríamos de contar com a sua colaboração respondendo a um questionário com perguntas sobre você, seus modos de vida, relacionamentos, sentimentos e opiniões.
      <p/><br/><p>
      A aplicação deste questionário ocorrerá na plataforma proprietária do GEDAAM (online) e o tempo de duração do preenchimento pode variar entre 5 e 15 minutos. Toda informação obtida por meio de suas respostas será considerada <strong>CONFIDENCIAL</strong> e sua identificação será mantida como informação <b>sigilosa</b>. Os relatórios e resultados deste estudo serão apresentados sem nenhuma forma de identificação individual e serão utilizados para fins científicos. 
      <p/><br/><p>
      Você não terá qualquer tipo de despesa para participar da pesquisa e não receberá remuneração por sua participação. O principal benefício para você ao aceitar participar é o de colaborar para o entendimento do papel do GEDAAM como um possível instrumento de apoio e suporte aos estudantes ao longo do curso. Este conhecimento poderá ser utilizado para efetivar a expansão ou formalização das ações desenvolvidas pelo GEDAAM e a sugerir adequações necessárias no currículo e nas atividades desenvolvidas na formação médica da UFMG. 
      <p/><br/><p>
      Você não corre nenhum risco ao responder ao questionário, a não ser o desconforto gerado por permanecer muito tempo na mesma posição para a leitura das perguntas e algum tipo de constrangimento por responder questões que mexam com suas emoções. Para minimizar estes desconfortos, você poderá se levantar a qualquer momento ou trocar de posição se assim desejar ou até deixar de responder alguma questão. Sua participação é voluntária, isto é, ela não é obrigatória, e você tem a liberdade para decidir se quer ou não participar, bem como retirar sua participação a qualquer momento. Você não terá prejuízo algum caso decida não participar, ou desistir da mesma. No entanto, sua participação é muito importante.
      <p/><br/><p>
      Caso sinta necessidade de contatar o pesquisador durante e/ou após a coleta de dados, poderá fazê-lo pelos telefones (31) 3409-9803 / (31) 991177907 ou e-mail: grazilage.oliveira@gmail.com (Professora Graziella Lage Oliveira). Da mesma forma, você poderá se comunicar com o Comitê de Ética em Pesquisa da UFMG (COEP) pelo telefone (31) 3409-4592 ou pelo e-mail: coep@prpq.ufmg.br quando tiver dúvidas sobre aspectos éticos.
      <p/><br/><p>
      Certos de contar com o seu apoio, reiteramos nosso apreço e agradecimento e solicitamos que você declare o seu consentimento livre e esclarecido neste documento.
      <p/>`
  },
  {
    title: 'Termo de consentimento livre e esclarecido',
    innerHTML: `
      Ao clicar em OK abaixo você declara ter lido e aceitado participar da pesquisa de indicadores do GEDAAM.
    `
  },
  {
    type: FormTypes.CHECKBOX,
    name: 'ingressoFaculdade',
    label: 'Qual foi a sua forma de ingresso na faculdade?',
    description: 'Selecione todas as opções que se aplicam',
    options: [
      { label: 'Ampla concorrência', value: 'ampla' },
      { label: 'Cota para estudante de escola pública', value: 'cota_escola' },
      { label: 'Cota para renda mensal menor que 1,5 salários', value: 'cota_renda' },
      { label: 'Cota para negros, pardos, indígenas e deficientes', value: 'cota_racial' },
      { label: 'Fies / Prouni', value: 'fies_prouni' },
      { label: 'Transferência', value: 'transfer' }
    ],
    initialValue: []
  },
  {
    type: FormTypes.INPUT,
    name: 'birthdate',
    label: 'Qual é a sua data de nascimento?',
    formType: 'date',
    validator: Yup.mixed().required('Não pode ser deixado em branco')
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
    validator: Yup.mixed().required()
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
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'income',
    label: 'Qual a renda mensal per capita sua família?',
    description: 'Uma aproximação de quanto em salários mínimos por pessoa a sua família produz',
    options: [
      { label: 'Menos de um salário mínimo (R$ 1.045,00)', value: '<1' },
      { label: 'Entre 1 e 3 salários (R$ 1.045,00 até R$3.135,00)', value: '1-3' },
      { label: 'Entre 3 e 5 salários (R$3.136,00 até R$5.225,00)', value: '3-5' },
      { label: 'Maior que 5 salários (R$5.225,00)', value: '>5' }
    ],
    validator: Yup.mixed().required()
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
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.CHECKBOX,
    name: 'studyTechnique',
    label: 'Quais das seguintes técnicas você utiliza nos estudos?',
    description: 'Selecione todas as opções que se aplicam',
    options: [
      { label: 'Flashcards', value: 'Flashcards' },
      { label: 'Pomodoro', value: 'Pomodoro' },
      { label: 'Mapas mentais', value: 'Mapas mentais' },
      { label: 'Resumos', value: 'Resumos' },
      { label: 'Apenas leitura', value: 'Apenas leitura' },
      { label: 'Esquemas', value: ' Esquemas' },
      { label: 'Método de anotação de Cornell', value: 'Método de anotação de Cornell' },
      { label: 'Estudo em grupo', value: 'Estudo em grupo' },
      { label: 'Auto-teste', value: 'Auto-teste' },
      { label: 'Auto-explicação', value: 'Auto-explicação' },
      { label: 'Método de Feynman', value: 'Método de Feynman' }
    ],
    initialValue: []
  },
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
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'studyHours',
    label: 'Quantas horas por semana você dedica para estudo, excetuando o tempo em sala de aula?',
    description: 'O tempo de estudo extraclasse, em horas',
    min: 0,
    max: 10,
    step: 0.5,
    defaultValue: 5,
    options: {
      minLabel: '0 horas',
      maxLabel: '10 ou mais',
      marks: genMarksArray(0, 10, 0.5, false)
    },
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'extracurricular',
    label: 'Você participa de algum grupo na faculdade?',
    description: 'Ligas acadêmicas, grupos de estudo, atléticas, charangas, etc',
    options: [
      { label: 'Sim', value: 'true' },
      { label: 'Não', value: 'false' }
    ],
    validator: Yup.mixed().required()
  },
  {
    title: 'Expectativas',
    innerHTML: `Baseado em suas expectativas ao ingressar no GEDAAM, indique <strong>quais contribuíram</strong.> para a sua inscrição e o <strong>quanto</strong> foi a contribuição. 
    <br/>Marque sua resposta em uma escala de (0) a (5), considerando um contínuo entre “não contribuiu” e “contribuiu muito”.
    <p>Não existem respostas certas ou erradas.
    Suas respostas são confidenciais.</p>`
  },
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
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
    validator: Yup.mixed().required()
  },
  {
    title: 'Autoeficácia',
    innerHTML: `Indique o quanto você <strong>se percebe capaz</strong> de realizar as situações propostas em cada uma das questões que se seguem, considerando sua experiência de formação atual.
    <br/><br/>Marque sua resposta em uma escala de (1) a (10), considerando um contínuo entre pouco e muito.
    <br/><br/><p>As perguntas a seguir foram desenvolvidas para auxiliar na identificação da auto eficácia acadêmica de estudantes do ensino superior.</p>
    <p>Não existem respostas certas ou erradas. Suas respostas são confidenciais.</p>`
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy1',
    label: 'Quanto eu sou capaz de aprender os conteúdos que são necessários à minha formação?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy2',
    label:
      'Quanto eu sou capaz de utilizar estratégias cognitivas para facilitar minha aprendizagem?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy3',
    label:
      'Quanto eu sou capaz de demonstrar, nos momentos de avaliação, o que aprendi durante meu curso?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy4',
    label: 'Quanto eu sou capaz de entender as exigências do meu curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy5',
    label:
      'Quanto eu sou capaz de expressar minha opinião quando outro colega de sala discorda de mim?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy6',
    label:
      'Quanto eu sou capaz de pedir ajuda, quando necessário, aos colegas nas atividades do curso?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy7',
    label:
      'Quanto eu sou capaz de reivindicar atividades extracurriculares relevantes para a minha formação?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy8',
    label: 'Quanto eu sou capaz de planejar ações para atingir minhas metas profissionais?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy9',
    label: 'Quanto eu sou capaz de refletir sobre a realização de minhas metas de formação?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy10',
    label:
      'Quanto eu sou capaz de selecionar, dentre os recursos oferecidos pela instituição, o mais apropriado à minha formação?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy11',
    label:
      'Quanto eu sou capaz de aplicar o conhecimento aprendido no curso em situações práticas?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy12',
    label:
      'Quanto eu sou capaz de estabelecer condições para o desenvolvimento dos trabalhos solicitados pelo curso?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy13',
    label: 'Quanto eu sou capaz de trabalhar em grupo?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy14',
    label: 'Quanto eu sou capaz de compreender os conteúdos abordados no curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy15',
    label:
      'Quanto eu sou capaz de manter-me atualizado sobre as novas tendências profissionais na minha área de formação?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy16',
    label: 'Quanto eu sou capaz de tomar decisões relacionadas à minha formação?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy17',
    label: 'Quanto eu sou capaz de cooperar com os colegas nas atividades do curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy18',
    label: 'Quanto eu sou capaz de esforçar-me nas atividades acadêmicas?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy19',
    label:
      'Quanto eu sou capaz de definir, com segurança, o que pretendo seguir dentre as diversas possibilidades de atuação profissional que existem na minha área de formação?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy20',
    label:
      'Quanto eu sou capaz de procurar auxílio dos professores para o desenvolvimento de atividades do curso?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy21',
    label: 'Quanto eu sou capaz de motivar-me para fazer as atividades ligadas ao curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy22',
    label: 'Quanto eu sou capaz de estabelecer minhas metas profissionais?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy23',
    label: 'Quanto eu sou capaz de estabelecer bom relacionamento com meus professores?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy24',
    label: 'Quanto eu sou capaz de cumprir o desempenho exigido para a aprovação no curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy25',
    label: 'Quanto eu sou capaz de contribuir com ideias para a melhoria do meu curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy26',
    label: 'Quanto eu sou capaz de terminar trabalhos do curso dentro do prazo estabelecido?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy27',
    label: 'Quanto eu sou capaz de planejar a realização das atividades solicitadas pelo curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy28',
    label: 'Quanto eu sou capaz de perguntar quando tenho dúvida?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy29',
    label: 'Quanto eu sou capaz de estabelecer amizades com os colegas do curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy30',
    label: 'Quanto eu sou capaz de atualizar os conhecimentos adquiridos no curso?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy31',
    label: 'Quanto eu sou capaz de resolver problemas inesperados relacionados à minha formação?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy32',
    label: 'Quanto eu sou capaz de preparar-me para as avaliações?',
    max: 10,
    step: 1,
    min: 1,
    defaultValue: 5,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy33',
    label:
      'Quanto eu sou capaz de aproveitar as oportunidades de participar em atividades extracurriculares?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5,
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.SLIDER,
    name: 'selfEfficacy34',
    label:
      'Quanto eu sou capaz de buscar informações sobre os recursos ou programas oferecidos pela minha instituição?',
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    options: {
      minLabel: 'Min.',
      maxLabel: 'Máx.',
      marks: array1To10Marks
    },
    initialValue: 5
  },
  {
    title: 'Suporte social',
    innerHTML: `Considerando uma escala de (1) a (5), representando um contínuo entre “discordo totalmente” e “concordo totalmente”, selecione a que melhor qualifica a sua forma de pensar.
    <p>Não existem respostas certas ou erradas.
    Suas respostas são confidenciais.</p>`
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport1',
    label:
      'Mesmo nas situações mais embaraçosas, se precisar de apoio de emergência tenho várias pessoas a quem posso recorrer',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport2',
    label:
      'Às vezes sinto falta de alguém verdadeiramente íntimo que me compreenda e com quem possa desabafar sobre coisas íntimas',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport3',
    label: 'Estou satisfeito(a) com a forma como me relaciono com a minha família',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport4',
    label: 'Estou satisfeito(a) com a quantidade de tempo que passo com a minha família',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport5',
    label: 'Estou satisfeito(a) com o que faço em conjunto com a minha família',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport6',
    label: 'Não saio com amigos tantas vezes quantas eu gostaria',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport7',
    label: 'Sinto falta de atividades sociais que me satisfaçam',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  },
  {
    type: FormTypes.RADIO,
    name: 'socialSupport8',
    label: 'Gostava de participar mais em atividades de organizações',
    description: 'Ex. clubes desportivos, escoteiros, partidos políticos, etc.',
    options: [
      { label: 'Concordo totalmente', value: '5' },
      { label: 'Concordo na maior parte', value: '4' },
      { label: 'Não concordo, nem discordo', value: '3' },
      { label: 'Discordo na maior parte', value: '2' },
      { label: 'Discordo totalmente', value: '1' }
    ],
    validator: Yup.mixed().required()
  }
]
