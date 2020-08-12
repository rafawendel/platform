import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

export default function Video({ youtubeId, title, errorMsg, playerVars }) {
  const width = Math.min((2 / 3) * window.innerWidth || 640, 720)

  const opts = {
    width,
    height: width * (9 / 16),
    playerVars: {
      autoplay: 0,
      ...playerVars
    }
  }

  const onReady = e => {}

  const YouTube = dynamic(
    () => import('react-youtube')
  )

  return (
    <>
      <div className="video bg-black">
        {youtubeId ? (
          <>
            <YouTube videoId={youtubeId} opts={opts} onReady={onReady} />
            <span role="presentation" aria-label={title} />
          </>
        ) : (
          <div className="bg-darker w-full h-full px-10 text-center flex items-center justify-center overflow-hidden">
            <h5>{errorMsg}</h5>
          </div>
        )}
      </div>
      <style jsx>{`
        .video {
          height: ${opts.height}px;
          width: ${opts.width}px;
        }
      `}</style>
    </>
  )
}

Video.defaultProps = {
  errorMsg: 'Disponível em breve',
  playerVars: {}
}

Video.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  playerVars: PropTypes.object
}
