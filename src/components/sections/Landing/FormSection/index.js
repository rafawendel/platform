import Pros from './Pros'
import FormCard from './FormCard'

export default function FormSection() {
  return (
    <section className="pb-20 relative block bg-gray-900">
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
      <FormCard />
    </section>
  )
}
