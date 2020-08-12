import dynamic from 'next/dynamic'
import Timeline from './Timeline'

export default function VideoSection({ activeVideo, ...props }) {
  const Video = dynamic(
    () => import('./Video'),
    { loading: () => <h5 className="text-center">Aguarde...</h5>, ssr: false }
  )

  return (
    <section className="text-gray-500 min-h-screen w-full overflow-x-hidden">
      <div className="py-4">
        <div className="flex flex-wrap-reverse justify-center items-center">
          <div>
            <Video {...activeVideo} />
          </div>
          <Timeline activeVideo={activeVideo} {...props} />
        </div>
      </div>
    </section>
  )
}
