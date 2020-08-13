import Timeline from './Timeline'
import Video from './Video'

export default function VideoSection({ activeVideo, ...props }) {
  return (
    <section className="py-4 px-6 text-gray-500 w-full overflow-x-hidden">
      <div className="flex flex-wrap-reverse justify-center items-center lg:justify-around">
        <Video {...activeVideo} />
        <Timeline activeVideo={activeVideo} {...props} />
      </div>
    </section>
  )
}
