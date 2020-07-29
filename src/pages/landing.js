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
  return (
    <>
      <Layout>
        <HeroSection
          title="GEDAAM"
          subtitle="O melhor evento que você já viu"
          src="https://lh3.googleusercontent.com/pw/ACtC-3dbrUs-kaZN8lj4yQo8SCKTbyVhpZG_ptV0ijM4CN2mjxg_8soYQJa_xNByGez8DPVI6LsUqPLXPFx1aTxCcvm_J57kQR_tziZBpZNaFf9e5eUj5wn8LRNxgJgJ1uCctk87XiEUgM-PonrANeUkofGO6w=w1000-h477-no"
          alt="pine trees"
          dent
        />
        <CardsSection
          cardSetContent={contents}
          tailwindColorClass="light"
          textTailwindColor="darker"
          heading="Working with us is a pleasure"
          text={`Don't let your uses guess by attaching tooltips and popovers to any element. Just make sure you enable them first via JavaScript.`}
          cta="Call to action!"
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
        />
        <LeadersSection />
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px', transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-gray-900 fill-current" points="2560 100 0 100" />
          </svg>
        </div>
        <FormSection />
      </Layout>
    </>
  )
}
