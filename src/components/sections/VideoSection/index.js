import Timeline from './Timeline'

export default function VideoSection() {
  return (
    <main className="bg-darker text-gray-500 min-h-screen">
      <div className="max-w-6xl py-10">
        <div className="flex flex-wrap-reverse justify-center items-end">
          <div>
            <div className="bg-light">{/* video goes here */}</div>
            <style jsx>{`
              div {
                width: 400px;
                height: 320px;
              }
            `}</style>
          </div>
          <Timeline />
        </div>
      </div>
    </main>
  )
}
