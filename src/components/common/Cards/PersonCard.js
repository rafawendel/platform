export default function PersonCard({ src, name, title, socialNetworks }) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt={name}
          src={src}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: '120px' }}
        />
        <div className="pt-6 text-center">
          <h5>{name}</h5>
          <small className="mt-1 uppercase font-semibold">{title}</small>
          <div className="mt-6">
            {socialNetworks.map(({ faIconClass, bubbleTailwindColor }, i) => (
              <button
                key={`${name}-social-${i}`}
                className={`bg-${bubbleTailwindColor} w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1`}
                type="button"
              >
                <i className={`${faIconClass}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
