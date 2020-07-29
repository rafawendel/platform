import PropTypes from 'prop-types'

export default function Dent({ height, tailwindColorClass, position }) {
  return (
    <>
      <div
        className={`dent ${
          position === 'bottom' ? 'top-auto bottom-0' : 'bottom-auto top-0'
        } relative left-0 right-0 w-full absolute pointer-events-none overflow-hidden`}
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
          <polygon
            className={`text-${tailwindColorClass} fill-current`}
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
      <style jsx>{`
        .dent {
          height: ${height}px;
          margin-top: -${height}px;
          transform: translateZ(0);
        }
      `}</style>
    </>
  )
}

Dent.defaultProps = {
  height: 70,
  tailwindColorClass: 'darker',
  position: 'bottom'
}

Dent.propTypes = {
  height: PropTypes.number,
  tailwindColorClass: PropTypes.string,
  position: PropTypes.oneOf('top', 'bottom')
}
