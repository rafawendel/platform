import Bubble from '../../common/Bubbles/Bubble'

export default function ProsList({ prosList }) {
  return (
    <ul className="list-none mt-6">
      {prosList.map(({ item, faIconClass, bubbleTailwindColor }, i) => (
        <li className="py-2" key={`list-item-${i + 1}`}>
          <div className="flex items-center">
            <div>
              {/* <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
            <i className="fas fa-fingerprint" />
          </span> */}
              <Bubble
                size="sm"
                tailwindColorClass={bubbleTailwindColor}
                faIconClass={faIconClass}
              />
            </div>
            <div>
              <h4>{item}</h4>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
