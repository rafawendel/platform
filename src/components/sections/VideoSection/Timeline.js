import TimelineButton from './TimelineButton'

export default function Timeline({ eventSettings, videos }) {
  const days = [...Array(eventSettings.durationInDays).keys()]

  const dayIndexedVideos = []
  videos.forEach(video => {
    if (dayIndexedVideos.indexOf(+video.premiereDay)) return
    dayIndexedVideos[+video.premiereDay] = video
  })

  const buttons = days.map(day => {
    const eventDay = dayIndexedVideos[day]
    const elapsedDaysInMs = day * 24 * 60 * 60 * 1000
    const eventDate = new Date(eventSettings.day0TimeInMs + elapsedDaysInMs)
    const formattedDate = `${eventDate.getDate()}/${eventDate.getMonth() + 1}`
    const today = `${new Date().getDate()}/${new Date().getMonth() + 1}`
    return {
      title: `Dia ${day + 1}${eventDay ? ` | ${eventDay.title}` : ' lorem ipsum dolor sit amet'}`,
      date: formattedDate,
      isPast: eventDate.getTime() < Date.now(),
      isActive: formattedDate === today,
      id: eventDay || day,
      href: eventDay ? `${eventDay.root}/[slug]` : '',
      as: eventDay ? `${eventDay.root}/${eventDay.slug}` : ''
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
