import Video from '../VideoSection/Video'

export default function ExtraVideoSection({ video }) {
  return (
    <section className="text-gray-500 overflow-x-hidden">
      <div className="py-4 flex flex-col items-center">
        {video.title && <h3 className="mb-2 text-center">{video.title}</h3>}
        <Video widthInVw="70" {...video} />
      </div>
    </section>
  )
}
