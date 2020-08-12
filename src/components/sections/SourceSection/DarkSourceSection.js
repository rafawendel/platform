import IconCard from '../../common/Cards/IconCard'

export default function SourceSection({ contents }) {
  return (
    <section className="pb-10 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-evenly">
          {contents.map((properties, i) => (
            <IconCard key={`card-${i + 1}`} {...properties} colorMode="dark" />
          ))}
        </div>
      </div>
    </section>
  )
}
