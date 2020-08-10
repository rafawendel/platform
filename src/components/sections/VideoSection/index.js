import Timeline from './Timeline'
import dynamic from 'next/dynamic'

export default function VideoSection({ videoData, ...props }) {
  const Video = dynamic(
    () => import('./Video'),
    { ssr: false }
  )

  return (
    <section className="text-gray-500 min-h-screen w-full overflow-x-hidden">
      <div className="pt-10">
        <div className="flex flex-wrap-reverse justify-center items-center">
          <Video {...videoData} />
          <Timeline {...props} />
        </div>
      </div>
    </section>
  )
}
