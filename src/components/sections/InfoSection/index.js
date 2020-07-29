import PictureVertical from '../../common/Pictures/PictureVertical'
import Bubble from '../../common/Bubbles/Bubble'
import ProsList from './ProsList'
import SplittedParagraphs from '../../common/Text/SplittedParagraphs'

export default function InfoSection({ prosList, text, textTailwindColor }) {
  return (
    <section className="relative py-20">
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
          <polygon className="text-white fill-current" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <PictureVertical src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-rocket text-xl" />
              </div> */}
              <Bubble size="lg" tailwindColorClass="pink-600" faIconClass="" />
              <h3 className="text-3xl font-semibold">A growing company</h3>
              <SplittedParagraphs text={text} textTailwindColor={textTailwindColor} />
              <ProsList prosList={prosList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
