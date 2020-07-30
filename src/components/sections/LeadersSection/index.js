import CardSet from './CardSet'

export default function LeadersSection({ id, heading, text, colorMode, leaders }) {
  return (
    <section
      id={id}
      className={`pt-20 pb-48 ${colorMode === 'dark' ? 'bg-dark' : 'bg-lighter'} ${
        colorMode === 'dark' ? 'text-light' : 'text-darker'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-8/12 px-4">
            <h2>{heading}</h2>
            <p className="text-lg leading-relaxed m-4">{text}</p>
          </div>
        </div>
        <CardSet leaders={leaders} />
      </div>
    </section>
  )
}
