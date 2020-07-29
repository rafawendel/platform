import CardSet from './CardSet'
import ImgCard from '../../../common/Cards/ImgCard'

export default function CardsSection({ tailwindColorClass }) {
  return (
    <section className={`pb-20 bg-${tailwindColorClass} -mt-24`}>
      <div className="container mx-auto px-4">
        <CardSet />
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-darker">Working with us is a pleasure</h3>
            <p className="text-darker text-lg leading-relaxed mt-4 mb-4">
              Don't let your uses guess by attaching tooltips and popoves to any element. Just make
              sure you enable them first via JavaScript.
            </p>
            <p className="text-darker font-bold mt-8">Call to action!</p>
          </div>
          <ImgCard
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            title="Título"
            details="lorem ipsum dolor sit amet, consectet"
            tailwindColorClass="primary"
          />
        </div>
      </div>
    </section>
  )
}
