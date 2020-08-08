import Bubble from '../Bubbles/Bubble'

export default function IconCard({
  title,
  details,
  tailwindClass,
  colorMode,
  bubbleTailwindClass
}) {
  return (
    <div className={`w-full md:w-4/12 px-4 text-center ${tailwindClass}`}>
      <div
        className={`${
          colorMode === 'dark' ? 'bg-dark text-light' : 'bg-lighter text-darker'
        } relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg`}
      >
        <div className="px-5 py-5 flex-auto overflow-hidden">
          <Bubble
            size="md"
            tailwindClass={`${bubbleTailwindClass} ${
              colorMode === 'dark' ? 'text-dark' : 'text-lighter'
            }`}
          />
          <h6>{title}</h6>
          <p className="mt-2 mb-4">{details}</p>
        </div>
      </div>
    </div>
  )
}
