import IconCard from '../../../common/Cards/IconCard'

export default function CardSet() {
  const contents = [
    {
      title: 'Awarded Agency',
      details:
        'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
      customClass: 'lg:pt-12 pt-6',
      bubbleTailwindColor: 'info',
      faIconClass: ''
    },
    {
      title: 'Free Revisions',
      details:
        'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.',
      bubbleTailwindColor: 'danger',
      faIconClass: ''
    },
    {
      title: '',
      details: '',
      customClass: 'pt-6',
      bubbleTailwindColor: 'success',
      faIconClass: ''
    }
  ]
  return (
    <div className="flex flex-wrap">
      {contents.map((properties, i) => (
        <IconCard
          key={`card-${i + 1}`}
          {...properties}
          tailwindColorClass="dark"
          textTailwindColor="lighter"
        />
      ))}
    </div>
  )
}
