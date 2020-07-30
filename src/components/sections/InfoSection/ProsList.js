import Bubble from '../../common/Bubbles/Bubble'

export default function ProsList({ prosList }) {
  return (
    <ul className="list-none mt-6">
      {prosList.map(({ item, ...props }, i) => (
        <li className="py-2" key={`list-item-${i + 1}`}>
          <div className="flex items-center">
            <div className="mr-2">
              <Bubble size="sm" {...props} />
            </div>
            <h6>{item}</h6>
          </div>
        </li>
      ))}
    </ul>
  )
}
