import PictureVertical from '../../common/Pictures/PictureVertical'
import Bubble from '../../common/Bubbles/Bubble'
import ProsList from './ProsList'
import SplittedParagraphs from '../../common/Text/SplittedParagraphs'

const Dent = () => (
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: '80px', transform: 'translateZ(0)' }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon className="text-dark fill-current" points="2560 0 2560 100 0 100" />
    </svg>
  </div>
)
export default function InfoSection({ id, prosList, title, text, pictureSrc, colorMode, dent }) {
  return (
    <section
      className={`relative py-20 bg-${colorMode === 'dark' ? 'dark' : 'lighter'} text-${
        colorMode === 'dark' ? 'lighter' : 'dark'
      } `}
    >
      {dent && <Dent />}
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <PictureVertical src={pictureSrc} />
          <div className="w-full md:w-5/12 sm:mt-6 ml-auto mr-auto px-4">
            <div id={id} className="md:pr-12">
              <Bubble size="lg" bubbleColor="primary" faIconClass="" />
              <h3>{title}</h3>
              <SplittedParagraphs>{text}</SplittedParagraphs>
              <ProsList prosList={prosList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
