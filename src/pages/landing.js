import Head from 'next/head'
import Layout from '../layouts/Layout'
import CardsSection from '../components/sections/CardsSection'
import LeadersSection from '../components/sections/LeadersSection'
import FormSection from '../components/sections/FormSection'
import HeroSection from '../components/sections/HeroSection'
import InfoSection from '../components/sections/InfoSection'

export default function Landing() {
  const contents = [
    {
      title: 'Quem somos?',
      details:
        'O Grupo de Estudos em Didática Aplicada ao Aprendizado de Medicina é um grupo de mentoria entre pares voltado para estudantes da áreas da saúde.',
      customClass: 'lg:pt-12 pt-6',
      bubbleBgColorClass: 'bg-info',
      faIconClass: ''
    },
    {
      title: 'Nossa origem',
      details:
        'O GEDAAM foi fundado em 2013 por estudantes da UFMG que acreditavam no potencial dos estudantes de promover o aprendizado mais eficiente do que os modelos tradicionais.',
      bubbleBgColorClass: 'bg-warning',
      faIconClass: ''
    },
    {
      title: 'Nossos objetivos',
      details:
        'O GEDAAM tem como fundamentos base técnicas de estudo, oratória, técnicas de apresentação e gestão do tempo. Mais recentemente, o grupo está promovendo encontros especializados, com temas como Pesquisa científica, tecnologia e grupos em Inglês',
      customClass: 'pt-6',
      bubbleBgColorClass: 'bg-success',
      faIconClass: ''
    }
  ]

  const prosList = [
    {
      item: 'Oficinas e apresentações voltadas para estudantes da área da saúde',
      faIconClass: 'fas fa-fingerprint',
      bubbleBgColorClass: 'bg-secondary'
    },
    {
      item: 'Oportunidade para se tornar um membro do GEDAAM',
      faIconClass: 'fas fa-fingerprint',
      bubbleBgColorClass: 'bg-info'
    },
    {
      item: 'O Grupo já atuante na UFMG, UFVJM, UniBH, UNIPAM, PUC—e não para de crescer!',
      faIconClass: 'fas fa-fingerprint',
      bubbleBgColorClass: 'bg-success'
    }
  ]

  const leaders = [
    {
      src: 'img/wendel.jpg',
      name: 'Rafael Wendel',
      title: 'Raciocínio clínico',
      socialNetworks: [{ faIconClass: 'fad', bubbleBgColorClass: 'bg-info' }]
    },
    {
      src: 'img/medici.jpeg',
      name: 'Eduardo Médici',
      title: 'Oratória',
      socialNetworks: [{ faIconClass: 'fad', bubbleBgColorClass: 'bg-info' }]
    },
    {
      src: 'img/nogueira.jpeg',
      name: 'Vinicius Nogueira',
      title: 'Técnicas de apresentação',
      socialNetworks: [{ faIconClass: 'fad', bubbleBgColorClass: 'bg-info' }]
    },
    {
      src: 'img/bela.jpg',
      name: 'Isabela Cristina',
      title: 'Técnicas de estudo',
      socialNetworks: [{ faIconClass: 'fad', bubbleBgColorClass: 'bg-info' }]
    },
    {
      src: 'img/nat.jpeg',
      name: 'Natália Acherman',
      title: 'Gestão do tempo',
      socialNetworks: [{ faIconClass: 'fad', bubbleBgColorClass: 'bg-info' }]
    }
  ] // .sort((_a, _b) => 0.5 - Math.random())

  const infoList = [
    {
      title: 'Data',
      details: 'do dia 10 a 15 de agosto',
      faIconClass: '',
      textColorClass: 'text-light'
    },
    {
      title: 'Formato',
      details:
        'Totalmente online, com momentos síncronos e assíncronos, além do oficinas e discussões em grupo',
      faIconClass: '',
      textColorClass: 'text-light'
    },
    {
      title: 'Duração',
      details: 'A carga horária total será de 8 horas, com certificação gratuita',
      faIconClass: '',
      textColorClass: 'text-light'
    }
  ]
  return (
    <>
      <Head>
        <title>Ektélesi | I Semana GEDAAM</title>
      </Head>
      <Layout>
        <HeroSection
          id="HeroSection"
          title="Ektélesi"
          subtitle="I Semana GEDAAM"
          previewText="Viva a faculdade como nunca antes"
          alt="palestrante com tela dreams"
          src="https://lh3.googleusercontent.com/pw/ACtC-3fGsoLtRhZVUOSjWUGP2iU7kTfPmGXKJ8MrxL0Ci-i5__vfc2MzmNw4OFrYCNTz3BLlkGKY9O1B9OfO_NUfY0v0Wk750jm_GMFX20II91ogKaepRR0G0bRYTphds3vwcn26yeRLrT9EvEc9hMb7Z_mg=w4160-no?authuser=0"
          overlayColor="#00000090"
          dent
        />
        <CardsSection
          id="CardsSection"
          heading="Ekté- o quê?"
          text={`Ektélesi - Derivado do grego, significa "desempenho", sendo o termo perfeito para nomear a semana de eventos promovidos pelo GEDAAM.
          É daí que vêm palavras como "eclético"`}
          cta="Junte-se a nós!"
          colorMode="light"
          cardSetContent={contents}
          imgCard={{
            alt: '...',
            src:
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
            title: 'GEDAAM',
            details: 'Um grupo feito por E para estudantes',
            bgColorClass: 'primary'
          }}
        />
        <InfoSection
          id="InfoSection"
          prosList={prosList}
          colorMode="dark"
          title="Por que participar do Ektélesi?"
          text="Uma semana repleta de atrações que podem mudar os rumos da sua trajetória acadêmica."
          pictureSrc="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          dent
        />
        <LeadersSection
          id="LeadersSection"
          heading="Apresentadores de primeira"
          text="Desde a sua criação, o GEDAAM capacitou dezenas de estudantes para apresentações e design. Quer ver a força disso? Conheça os palestrantes!"
          colorMode="dark"
          leaders={leaders}
        />

        <FormSection
          id="Form"
          heading="Informações do evento"
          text="Tudo que você precisa saber sobre a I Semana GEDAAM"
          formTitle="Form"
          formSubtitle="alá"
          colorMode="dark"
          prosList={infoList}
          dent
        />
      </Layout>
    </>
  )
}
