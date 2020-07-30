import Bubble from '../Bubbles/Bubble'

export default function PlainCard({ title, details, textColorClass, ...props }) {
  return (
    <div className={`${textColorClass} w-full lg:w-3/12 px-4 text-center`}>
      <Bubble size="md" bubbleBgColorClass={textColorClass.replace('text', 'bg')} {...props} />
      <h5 className="uppercase">{title}</h5>
      <p className="mt-2 mb-4 font-normal">{details}</p>
    </div>
  )
}
