import Bubble from '../Bubbles/Bubble'

export default function IconCard({
  title,
  details,
  customClass,
  faIconClass,
  bubbleTailwindColor,
  tailwindColorClass,
  textTailwindColor
}) {
  return (
    <div className={`${customClass} w-full md:w-4/12 px-4 text-center`}>
      <div
        className={`bg-${tailwindColorClass} relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg`}
      >
        <div className="px-4 py-5 flex-auto">
          {/* <div
            className={`bg-${bubbleTailwindColor} text-darker p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full`}
          >
            <i className={faIconClass} /> */}
          <Bubble size="md" bubbleTailwindColor={bubbleTailwindColor} faIconClass={faIconClass} />
        </div>
        <h6 className={`text-${textTailwindColor}`}>{title}</h6>
        <p className={`text-${textTailwindColor} mt-2 mb-4`}>{details}</p>
      </div>
    </div>
  )
}
