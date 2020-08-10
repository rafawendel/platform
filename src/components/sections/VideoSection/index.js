import dynamic from 'next/dynamic'
import Timeline from './Timeline'

export default function VideoSection() {
  const Video = dynamic(
    () => {
      return import('./Video');
    },
    { ssr: false }
  )

  return (
    <section className="text-gray-500 min-h-screen max-w-full overflow-x-hidden">
      <div className="pt-10">
        <div className="flex flex-wrap-reverse justify-center items-center">
          <Video videoId="nHsofRsuXfk" />
          <Timeline />
        </div>
      </div>

    </section>
  )
}
