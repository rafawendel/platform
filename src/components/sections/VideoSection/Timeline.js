import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import TimelineButton from './TimelineButton'

export default function Timeline({ eventSettings, videos }) {
  const router = useRouter()
  const currentVideoId = router.query.id
  const [activeVideo, setActiveVideo] = useState(1)

  const days = [...Array(eventSettings.durationInDays).keys()]

  const dayIndexedVideos = []
  videos.forEach(video => {
    if (dayIndexedVideos.indexOf(+video.premiereDay) >= 0) return
    dayIndexedVideos[+video.premiereDay] = video
  })

  useEffect(() => {
    setActiveVideo(videos.find(({ id }) => id === currentVideoId) || 1)
  }, [videos, currentVideoId])

  const buttons = days.map(day => {
    const eventDay = dayIndexedVideos[day]
    const elapsedDaysInMs = day * 24 * 60 * 60 * 1000
    const eventDate = new Date(eventSettings.day0TimeInMs + elapsedDaysInMs)
    const formattedDate = `${eventDate.getDate()}/${eventDate.getMonth() + 1}`
    // const today = `${new Date().getDate()}/${new Date().getMonth() + 1}`
    const href = eventDay ? `${eventDay.root}/[id]` : '/videos/[id]'
    const as = eventDay ? `${eventDay.root}/${eventDay.id}` : '/videos/1'
    return {
      title: `Dia ${day + 1}${eventDay ? ` | ${eventDay.title}` : ''}`,
      date: formattedDate,
      isPast: eventDate.getTime() <= Date.now(),
      isActive: day === +activeVideo.premiereDay,
      id: eventDay ? eventDay.id : day,
      onClick: () => router.push(href, as, { shallow: true })
    }
  })

  return (
    <>
      <section className="px-4 pb-8 lg:py-0 lg:pl-8 flex-auto md:mx-4 lg:max-w-md">
        <ul className="flex lg:flex-col justify-center">
          {buttons.map(({ id, ...btnProps }) => (
            <TimelineButton key={`video-${id}`} {...btnProps} />
          ))}
        </ul>
      </section>
    </>
  )
}
