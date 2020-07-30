import CardSet from './CardSet'
import ImgCard from '../../common/Cards/ImgCard'
import SplittedParagraphs from '../../common/Text/SplittedParagraphs'

export default function CardsSection({
  id,
  cardSetContent,
  heading,
  text,
  cta,
  colorMode,
  imgCard
}) {
  return (
    <section id={id} className={`pb-20 bg-${colorMode === 'dark' ? 'darker' : 'light'} -mt-24`}>
      <div className="container mx-auto px-4">
        <CardSet contents={cardSetContent} colorMode={colorMode} />
        <div
          className={`flex flex-wrap items-center mt-16 text-${
            colorMode === 'dark' ? 'light' : 'darker'
          }`}
        >
          <div className="w-full md:w-5/12 sm:mb-8 px-4 mr-auto ml-auto">
            <h3>{heading}</h3>
            <SplittedParagraphs>{text}</SplittedParagraphs>
            <p className="font-bold mt-8 opacity-100">{cta}</p>
          </div>
          <ImgCard {...imgCard} dent colorMode={colorMode} />
        </div>
      </div>
    </section>
  )
}
