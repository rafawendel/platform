import Parallax from '../layouts/Parallax'
import CardsSection from '../components/sections/Landing/CardsSection'
import LeadersSection from '../components/sections/Landing/LeadersSection'
import FormSection from '../components/sections/Landing/FormSection'
import HeroText from '../components/sections/Landing/HeroText'

export default function Landing() {
  return (
    <>
      <HeroText title="GEDAAM" subtitle="O melhor evento que você já viu" />
      <CardsSection tailwindColorClass="lighter" />
      <LeadersSection />
      <FormSection />
    </>
  )
}
