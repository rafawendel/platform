import SponsorCard from '../../common/Cards/SponsorCard'

export default function SponsorSection() {
  const sponsorList = [
    {
      logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
      alt: 'Sanarflix',
      href: ''
    },
    {
      logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
      alt: 'Sanarflix',
      href: ''
    },
    {
      logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
      alt: 'Sanarflix',
      href: ''
    },
    {
      logo: 'https://pbs.twimg.com/profile_images/1098948672727990272/TtDcMwaR.jpg',
      alt: 'Sanarflix',
      href: ''
    }
  ]

  return (
    <section className="bg-dark w-full h-full pb-4 overflow-hidden">
      <div className="container px-4 md:mx-auto">
        <div className="flex justify-center py-8">
          <h4>Apoio</h4>
        </div>
        <div className="grid gap-3">
          {sponsorList.map((sponsorProps, i) => (
            <SponsorCard key={`sponsor-${i + 1}`} {...sponsorProps} />
          ))}
        </div>
        <style jsx>{`
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
          }
        `}</style>
      </div>
    </section>
  )
}
