import Pros from './Pros'
import SignupForm from '../../Forms/SignUp'
import FormCard from '../../common/Cards/FormCard'

const Dent = () => (
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: '80px' }}
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
      <polygon className="text-darker fill-current" points="2560 0 2560 100 0 100" />
    </svg>
  </div>
)

export default function FormSection({
  id,
  heading,
  text,
  prosList,
  colorMode,
  formTitle,
  formSubtitle,
  dent
}) {
  return (
    <section
      className={`pb-20 relative block ${colorMode === 'dark' ? 'bg-darker' : 'bg-light'} ${
        colorMode === 'dark' ? 'text-light' : 'text-darker'
      }`}
    >
      {dent && <Dent />}

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-8/12 px-4 sm:mt-8">
            <h2>{heading}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4">{text}</p>
          </div>
        </div>
        <Pros prosList={prosList} />
      </div>
      <div className="relative block py-24 lg:pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-32">
            <FormCard
              id={id}
              title={formTitle}
              subtitle={formSubtitle}
              colorMode={colorMode}
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSd4NaSZT4X8NM8jjCcVQ06fmMPE_hcspxMzhPX6WWsXuF3yfQ/viewform',
                  '_blank'
                )
              }
            >
              {/* <SignupForm colorMode={colorMode} /> */}
              <iframe
                title="Formulário de Inscrição"
                className="w-full px-4 py-5"
                src="https://docs.google.com/forms/d/e/1FAIpQLSd4NaSZT4X8NM8jjCcVQ06fmMPE_hcspxMzhPX6WWsXuF3yfQ/viewform?embedded=true"
                width="640"
                height="500"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Carregando…
              </iframe>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  )
}
