import Bubble from '../Bubbles/Bubble'

export default function PlainCard({ title, details, textColor, faIconClass }) {
  return (
    <div className={`text-${textColor} w-full lg:w-3/12 px-4 text-center`}>
      <Bubble size="md" bubbleColor={textColor} faIconClass={faIconClass} />
      <h5>{title}</h5>
      <p className="mt-2 mb-4 font-normal">{details}</p>
    </div>
  )
}
