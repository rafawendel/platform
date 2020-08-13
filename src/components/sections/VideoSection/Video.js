import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

export default function Video({ youtubeId, title, errorMsg, playerVars }) {

  const opts = {
    height: 720,
    width: 1280,
    playerVars: {
      autoplay: 0,
      ...playerVars
    }
  }

  const onReady = e => {}

  const YouTube = dynamic(
    () => import('react-youtube'), {
      loading: () => <h4>Carregando...</h4>
    }
  )

  return (
    <>
      <div className="video bg-black flex items-center justify-center">
        {youtubeId ? (
          <>
            <YouTube className="video bg-black z-10" videoId={youtubeId} opts={opts} onReady={onReady} />
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
          height: 45vw;
          width: 80vw;
        }

        @media screen and (min-width: 1024px) {
          .video {
            height: 31.5vw;
            width: 56vw;
          }
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
