import { useState, useEffect } from 'react'
import TimelineButton from './TimelineButton'

export default function Timeline({ eventSettings, videos, activeVideo, setActiveVideoRoute }) {
  const [buttons, setButtons] = useState([])

  useEffect(() => {
    const days = [...Array(eventSettings.durationInDays).keys()]
    const buttonSetup = (day, videos, day0TimeInMs) => {
      const thisVideo = videos.find(v => +v.premiereDay === day)
      const videoDate = new Date(day0TimeInMs + day * 24 * 60 * 60 * 1000)

      return {
        title: thisVideo ? thisVideo.title : `Dia ${day + 1}`,
        date: `${videoDate.getDate()}/${videoDate.getMonth() + 1}`,
        isPast: day < +activeVideo.premiereDay,
        isActive: day === +activeVideo.premiereDay,
        isPremiered: thisVideo ? thisVideo.isPremiered : day === 0,
        id: thisVideo ? thisVideo.id : day,
        onClick: () => setActiveVideoRoute(thisVideo)
      }
    }

    setButtons(days.map(day => buttonSetup(day, videos, eventSettings.day0TimeInMs)))
  }, [activeVideo, eventSettings, setActiveVideoRoute, videos])

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
