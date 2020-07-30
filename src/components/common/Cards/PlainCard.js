import Bubble from '../Bubbles/Bubble'

export default function PlainCard({ title, details, tailwindColorClass, faIconClass }) {
  return (
    <div className="w-full lg:w-3/12 px-4 text-center">
      {/* <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className={faIconClass} />
      </div> */}
      <Bubble size="md" tailwindColorClass={tailwindColorClass} faIconClass={faIconClass} />
      <h6>{title}</h6>
      <p className="mt-2 mb-4">{details}</p>
    </div>
  )
}
