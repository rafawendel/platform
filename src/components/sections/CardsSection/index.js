import CardSet from './CardSet'
import ImgCard from '../../common/Cards/ImgCard'
import Dent from '../../common/Dent'
import SplittedParagraphs from '../../common/Text/SplittedParagraphs'

export default function CardsSection({
  tailwindColorClass,
  textTailwindColor,
  cardSetContent,
  heading,
  text,
  cta,
  imgCard
}) {
  return (
    <section className={`pb-20 bg-${tailwindColorClass} -mt-24`}>
      <div className="container mx-auto px-4">
        <CardSet contents={cardSetContent} />
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className={`text-${textTailwindColor}`}>{heading}</h3>
            <SplittedParagraphs text={text} tailwindTextColor={textTailwindColor} />

            <p className={`text-${textTailwindColor} font-bold mt-8`}>{cta}</p>
          </div>
          <ImgCard {...imgCard} />
        </div>
      </div>
    </section>
  )
}
