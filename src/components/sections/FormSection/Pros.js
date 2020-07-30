import PlainCard from '../../common/Cards/PlainCard'

export default function Pros({ prosList }) {
  return (
    <div className="flex flex-wrap mt-12 justify-center">
      {prosList.map((properties, i) => (
        <PlainCard key={i + 1} {...properties} />
      ))}
    </div>
  )
}
