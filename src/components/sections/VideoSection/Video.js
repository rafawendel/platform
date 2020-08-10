import dynamic from 'next/dynamic'

export default function Video({ youtubeId, title }) {
  const width = Math.min((2 / 3) * window.innerWidth || 640, 720)

  const opts = {
    width,
    height: width * (9 / 16),
    autoplay: 0
  }

  const onReady = e => {
    
  }

  const YouTube = dynamic(
    () => import('react-youtube'),
    { loading: () => <div>...</div>, ssr: false }
  )

  return (
    <>
      <div className="video bg-light">
        <YouTube videoId={youtubeId} opts={opts} onReady={onReady} />
        <span role="presentation" aria-label={title} />
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
