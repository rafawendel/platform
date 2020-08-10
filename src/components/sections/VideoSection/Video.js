import YouTube from 'react-youtube'

export default function Video({ videoId }) {
  const width = Math.min((2 / 3) * window.innerWidth || 640, 720)

  const opts = {
    width,
    height: width * (9 / 16),
    autoplay: 0
  }

  const onReady = e => {
    console.log(e.target)
  }

  return (
    <>
      <div className="video bg-light">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
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
