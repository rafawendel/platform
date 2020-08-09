import SponsorCard from '../../common/Cards/SponsorCard'

export default function SponsorSection({ sponsorList }) {
  return (
    <section className="bg-dark max-w-full">
      <div className="container mx-auto">
        <div className="flex justify-center py-8">
          <h4>Apoio</h4>
        </div>
        <div className="grid gap-4 grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
        </div>
      </div>
    </section>
  )
}
