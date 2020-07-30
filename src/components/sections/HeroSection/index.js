import PropTypes from 'prop-types'
import HeroText from './HeroText'

export default function HeroSection({
  title,
  subtitle,
  src,
  alt,
  overlayColor,
  textTailwindColor,
  dent
}) {
  return (
    <>
      <div className="hero-wrapper relative pt-16 pb-32 flex content-center items-center justify-center">
        <div
          role="img"
          aria-label={alt}
          className="bg-image absolute top-0 w-full h-full bg-center bg-cover"
        />
        <HeroText title={title} subtitle={subtitle} textTailwindColor={textTailwindColor} />
        {dent && (
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px' }}
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
              <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        )}
      </div>

      <style jsx>{`
        .hero-wrapper {
          min-height: 75vh;
        }

        .bg-image {
          background-image: linear-gradient(${overlayColor}, ${overlayColor}), url(${src});
        }
      `}</style>
    </>
  )
}

HeroSection.defaultProps = {
  overlayColor: 'rgba(0, 0, 0, 0)',
  alt: '',
  subtitle: ''
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  subtitle: PropTypes.string,
  overlayColor: PropTypes.string
}
