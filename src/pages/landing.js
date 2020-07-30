import Layout from '../layouts/Layout'
import CardsSection from '../components/sections/CardsSection'
import LeadersSection from '../components/sections/LeadersSection'
import FormSection from '../components/sections/FormSection'
import HeroSection from '../components/sections/HeroSection'
import InfoSection from '../components/sections/InfoSection'

export default function Landing() {
  const contents = [
    {
      title: 'Awarded Agency',
      details:
        'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
      customClass: 'lg:pt-12 pt-6',
      bubbleTailwindColor: 'info',
      faIconClass: ''
    },
    {
      title: 'Free Revisions',
      details:
        'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.',
      bubbleTailwindColor: 'danger',
      faIconClass: ''
    },
    {
      title: '',
      details: '',
      customClass: 'pt-6',
      bubbleTailwindColor: 'success',
      faIconClass: ''
    }
  ]

  const prosList = [
    {
      item: 'Carefully crafted components',
      faIconClass: 'fas fa-fingerprint',
      bubbleTailwindColor: 'pink-300'
    }
  ]

  const prosList2 = [
    {
      title: 'Test',
      details: 'lorem ipsum dolor sit amet, consectetur adip',
      faIconClass: '',
      tailwindTextColor: 'white',
      tailwindColorClass: 'darker'
    }
  ]
  return (
    <>
      <Layout>
        <HeroSection
          title="GEDAAM"
          subtitle="O melhor evento que você já viu"
          alt="pine trees"
          src="https://lh3.googleusercontent.com/pw/ACtC-3fGsoLtRhZVUOSjWUGP2iU7kTfPmGXKJ8MrxL0Ci-i5__vfc2MzmNw4OFrYCNTz3BLlkGKY9O1B9OfO_NUfY0v0Wk750jm_GMFX20II91ogKaepRR0G0bRYTphds3vwcn26yeRLrT9EvEc9hMb7Z_mg=w4160-no?authuser=0"
          overlayColor="#00000090"
          textTailwindColor="light"
          dent
        />
        <CardsSection
          heading="Working with us is a pleasure"
          text={`Don't let your uses guess by attaching tooltips and popovers to any element. Just make sure you enable them first via JavaScript.`}
          cta="Call to action!"
          tailwindColorClass="light"
          textTailwindColor="darker"
          cardSetContent={contents}
          imgCard={{
            alt: '...',
            src:
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
            title: 'Título',
            details: 'lorem ipsum dolor sit amet, consectet',
            tailwindColorClass: 'primary'
          }}
        />
        <InfoSection
          prosList={prosList}
          textTailwindColor="darker"
          text={`The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.`}
          pictureSrc="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          dent
        />
        <LeadersSection />

        <FormSection
          heading="Build something"
          text="
              Put the potentially record low maximum sea ice extent tihs year down to low ice.
              According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
            "
          colorMode="dark"
          prosList={prosList2}
          dent
        />
      </Layout>
    </>
  )
}
