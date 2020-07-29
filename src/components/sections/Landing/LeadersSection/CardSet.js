import PersonCard from '../../../common/Cards/PersonCard'

export default function CardSet() {
  const leaders = [
    {
      src: '',
      name: 'Rafael Gingold',
      title: 'Especialista em técnicas de estudo',
      socialNetworks: [{ faIconClass: 'fad', bubbleTailwindColor: 'info' }]
    }
  ]
  return (
    <div className="flex flex-wrap">
      {leaders.map(properties => (
        <PersonCard key={properties.name} {...properties} />
      ))}
    </div>
  )
}
