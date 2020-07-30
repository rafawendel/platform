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
      bubbleColor: 'info',
      faIconClass: ''
    },
    {
      title: 'Nossa origem',
      details:
        'O GEDAAM foi fundado em 2013 por estudantes da UFMG que acreditavam no potencial dos estudantes de promover o aprendizado mais mais eficiente do que os modelos tradicionais.',
      bubbleColor: 'warning',
      faIconClass: ''
    },
    {
      title: 'Nossos objetivos',
      details:
        'O GEDAAM tem como fundamentos base técnicas de estudo, oratória, técnicas de apresentação e gestão do tempo. Mais recentemente, o grupo está promovendo encontros especializados, com temas como Pesquisa científica, tecnologia e grupos em Inglês',
      customClass: 'pt-6',
      bubbleColor: 'success',
      faIconClass: ''
    }
  ]

  const prosList = [
    {
      item: 'Carefully crafted components',
      faIconClass: 'fas fa-fingerprint',
      bubbleColor: 'pink-300'
    },
    {
      item: 'Carefully crafted components',
      faIconClass: 'fas fa-fingerprint',
      bubbleColor: 'pink-300'
    }
  ]

  const leaders = [
    {
      src:
        'https://lh3.googleusercontent.com/pw/ACtC-3czwYnvdvd9uK3St26yj-Ns8aFUEGrHztv33k_x3kawINWwV9F7H1dWAnW693rEPig52vkKQWXi7ZPz8UIs5-3Lg-9Hv8_-cn29WIQtBVjlnKimjBexPP5b06P8Au0Q5Xr1lsgIljO86rXdcyL8px3mJA=s2427-no?authuser=0',
      name: 'Rafael Wendel',
      title: 'Raciocínio clínico',
      socialNetworks: [{ faIconClass: 'fad', bubbleColor: 'info' }]
    },
    {
      src: 'img/medici.jpeg',
      name: 'Eduardo Médici',
      title: 'Oratória',
      socialNetworks: [{ faIconClass: 'fad', bubbleColor: 'info' }]
    },
    {
      src:
        'https://lh3.googleusercontent.com/pw/ACtC-3czwYnvdvd9uK3St26yj-Ns8aFUEGrHztv33k_x3kawINWwV9F7H1dWAnW693rEPig52vkKQWXi7ZPz8UIs5-3Lg-9Hv8_-cn29WIQtBVjlnKimjBexPP5b06P8Au0Q5Xr1lsgIljO86rXdcyL8px3mJA=s2427-no?authuser=0',
      name: 'Isabela Cristina',
      title: 'Técnicas de estudo',
      socialNetworks: [{ faIconClass: 'fad', bubbleColor: 'info' }]
    },
    {
      src: 'img/nogueira.jpeg',
      name: 'Vinicius Nogueira',
      title: 'Técnicas de apresentação',
      socialNetworks: [{ faIconClass: 'fad', bubbleColor: 'info' }]
    },
    {
      src:
        'https://lh3.googleusercontent.com/pw/ACtC-3czwYnvdvd9uK3St26yj-Ns8aFUEGrHztv33k_x3kawINWwV9F7H1dWAnW693rEPig52vkKQWXi7ZPz8UIs5-3Lg-9Hv8_-cn29WIQtBVjlnKimjBexPP5b06P8Au0Q5Xr1lsgIljO86rXdcyL8px3mJA=s2427-no?authuser=0',
      name: 'Natália Acherman',
      title: 'Gestão do tempo',
      socialNetworks: [{ faIconClass: 'fad', bubbleColor: 'info' }]
    }
  ]

  const prosList2 = [
    {
      title: 'Test',
      details: 'lorem ipsum dolor sit amet, consectetur adip lorem, consectetur adipiscing elit',
      faIconClass: '',
      textColor: 'light'
    },
    {
      title: 'Test',
      details: 'lorem ipsum dolor sit amet, consectetur adip lorem, consectetur adipiscing elit',
      faIconClass: '',
      textColor: 'light'
    },
    {
      title: 'Test',
      details: 'lorem ipsum dolor sit amet, consectetur adip lorem, consectetur adipiscing elit',
      faIconClass: '',
      textColor: 'light'
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
            title: 'Título',
            details: 'lorem ipsum dolor sit amet, consectet',
            colorClass: 'primary'
          }}
        />
        <InfoSection
          id="InfoSection"
          prosList={prosList}
          colorMode="dark"
          text={`The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.`}
          pictureSrc="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          dent
        />
        <LeadersSection
          id="LeadersSection"
          heading="Apresentadores de primeira"
          text="According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum."
          colorMode="dark"
          leaders={leaders}
        />

        <FormSection
          id="Form"
          heading="Build something"
          text="
              Put the potentially record low maximum sea ice extent tihs year down to low ice.
              According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
            "
          formTitle="Form"
          formSubtitle="alá"
          colorMode="dark"
          prosList={prosList2}
          dent
        />
      </Layout>
    </>
  )
}
