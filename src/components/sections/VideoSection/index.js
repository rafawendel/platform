import Timeline from './Timeline'
import Video from './Video'

export default function VideoSection({ activeVideo, ...props }) {
  return (
    <section className="text-gray-500 md:min-h-screen w-full overflow-x-hidden">
      <div className="py-4">
        <div className="flex flex-wrap-reverse justify-center items-center">
          <Video {...activeVideo} />
          <Timeline activeVideo={activeVideo} {...props} />
        </div>
      </div>
    </section>
  )
}
