import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

export default function Video({ youtubeId, title, errorMsg, playerVars, widthInVw, fallbackHref }) {
  const heightInVw = (widthInVw * 9) / 16
  const lgScreenFactor = 1.5

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
      <div className="flex justify-around">
        <div className="video bg-darker flex items-center justify-center">
          {youtubeId ? (
            <div>
              <YouTube className="video" videoId={youtubeId} opts={opts} onReady={onReady} />
              <span role="presentation" aria-label={title} />
            </div>
          ) : (
            <a href={fallbackHref} className="w-full h-full">
              <div className="w-full h-full px-10 text-center flex items-center justify-center overflow-hidden">
                <h5>{errorMsg}</h5>
              </div>
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .video {
          width: ${widthInVw}vw;
          height: ${heightInVw}vw;
        }

        @media screen and (min-width: 1024px) {
          .video {
            width: ${widthInVw / lgScreenFactor}vw;
            height: ${heightInVw / lgScreenFactor}vw;
          }
        }
      `}</style>
    </>
  )
}

Video.defaultProps = {
  errorMsg: 'Disponível em breve',
  playerVars: {},
  widthInVw: 80
}

Video.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  playerVars: PropTypes.object,
  widthInVw: PropTypes.number
}
