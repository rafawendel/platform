import IconCard from '../../common/Cards/IconCard'

export default function SourceSection({ contents, colorMode }) {
  return (
    <section className={`pb-20 ${colorMode === 'dark' ? 'bg-darker' : 'bg-light'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {contents.map((properties, i) => (
            <IconCard key={`card-${i + 1}`} {...properties} colorMode={colorMode} />
          ))}
        </div>
      </div>
    </section>
  )
}
