import PlainCard from '../../common/Cards/PlainCard'

export default function Pros({ prosList }) {
  return (
    <div className="flex flex-wrap my-12 justify-center">
      {prosList.map((properties, i) => (
        <PlainCard key={`pro-${i + 1}`} {...properties} />
      ))}
    </div>
  )
}
