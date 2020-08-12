import Link from 'next/link'
import Bubble from '../Bubbles/Bubble'

export default function IconCard({
  title,
  details,
  tailwindClass,
  colorMode,
  bubbleTailwindClass,
  href,
  ...props
}) {
  return (
    <div className={`w-full md:w-4/12 px-4 text-center ${tailwindClass} bg-transparent`}>
      <a href={href} rel="noreferrer" target="_blank">
        <div
          className={`${
            colorMode === 'dark' ? 'bg-darker text-light' : 'bg-lighter text-darker'
          } relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg opacity-100 hover:opacity-75 transition duration-200 hover:text-white`}
        >
          <div className="px-5 pb-5 flex-auto overflow-hidden">
            <Bubble
              size="lg"
              tailwindClass={`${bubbleTailwindClass} ${
                colorMode === 'dark' ? 'text-dark' : 'text-lighter'
              }`}
              {...props}
            />
            <h6>{title}</h6>
            <p className="mt-2 mb-4">{details}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
