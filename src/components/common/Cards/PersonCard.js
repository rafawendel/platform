import Bubble from '../Bubbles/Bubble'

export default function PersonCard({ src, name, title, socialNetworks }) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-6 mb-12 px-4">
      <div className="px-6">
        <img
          alt={name}
          src={src}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: '120px' }}
        />
        <div className="pt-6 text-center">
          <h5>{name}</h5>
          <small className="mt-1 uppercase font-semibold opacity-75">{title}</small>
          <div className="mt-6">
            {socialNetworks.map((properties, i) => (
              <Bubble key={`${name}-social-${i + 1}`} size="sm" {...properties} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
