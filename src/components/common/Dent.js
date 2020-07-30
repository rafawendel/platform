import PropTypes from 'prop-types'

export default function Dent({ height, marginTop, tailwindClass, position }) {
  return (
    <>
      <div className={`absolute left-0 right-0 w-full pointer-events-none overflow-hidden `}>
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
      <style jsx>{`
        div {
          /* margin-top: ${marginTop}px; */
          /* transform: translateZ(0); */
          /* height: 200px; */
          top: 300px
        }

        svg {
          /* height: 200px; */
        }
        `}</style>
    </>
  )
}

Dent.defaultProps = {
  height: 80,
  marginTop: -80,
  tailwindClass: 'darker',
  position: 'bottom'
}

Dent.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  tailwindClass: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom'])
}
