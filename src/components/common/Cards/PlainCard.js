import Bubble from '../Bubbles/Bubble'

export default function PlainCard({ title, details, tailwindClass, ...props }) {
  return (
    <div className={`${tailwindClass} w-full lg:w-3/12 px-4 text-center`}>
      <Bubble size="md" tailwindClass={tailwindClass.replace('text', 'bg')} {...props} />
      <h5 className="uppercase">{title}</h5>
      <p className="mt-2 mb-4 font-normal">{details}</p>
    </div>
  )
}
