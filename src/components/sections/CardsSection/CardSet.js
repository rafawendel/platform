import IconCard from '../../common/Cards/IconCard'

export default function CardSet({ contents, colorMode }) {
  return (
    <div className="flex flex-wrap">
      {contents.map((properties, i) => (
        <IconCard
          key={`card-${i + 1}`}
          {...properties}
          colorMode={colorMode === 'dark' ? 'light' : 'dark'}
        />
      ))}
    </div>
  )
}
