import Pros from './Pros'
import Form from './Form'

export default function FormSection() {
  return (
    <section className="pb-20 relative block bg-gray-900">
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
          <polygon className="text-gray-900 fill-current" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">Build something</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Put the potentially record low maximum sea ice extent tihs year down to low ice.
              According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
            </p>
          </div>
        </div>
        <Pros />
      </div>
      <Form />
    </section>
  )
}
