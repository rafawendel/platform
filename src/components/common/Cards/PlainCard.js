import Bubble from '../Bubbles/Bubble'

export default function PlainCard({ title, details, tailwindClass, colorMode }) {
  return (
    <div className={`${tailwindClass} w-full lg:w-3/12 px-4 text-center`}>
      <Bubble size="md" tailwindClass={colorMode === 'dark' ? 'text-darker' : 'text-light'} />
      <h5 className="uppercase">{title}</h5>
      <p className="mt-2 mb-4 font-normal">{details}</p>
    </div>
  )
}
