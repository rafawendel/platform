import PlainCard from '../../../common/Cards/PlainCard'

export default function Pros() {
  const prosList = [
    { title: 'Test', details: 'lorem ipsum dolor sit amet, consectetur adip', faIconClass: '' }
  ]
  return (
    <div className="flex flex-wrap mt-12 justify-center">
      {prosList.map((properties, i) => (
        <PlainCard key={i} {...properties} />
      ))}
    </div>
  )
}
