import { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { validateVideoPremieres, getInitialVideos, getAllVideos } from '../../lib/videos'
import { getEventProps, getContent, getSponsors } from '../../lib/event'
import Building from '../../layouts/Workshop/Building'
import Workshop from '../../layouts/Workshop'
import { AuthContext } from '../../context/auth'

export default function Event({ eventSettings, initialVideos, ...props }) {
  const router = useRouter()
  const currentVideoId = router.query.id

  const { isLoggedIn, user, videos, setVideos } = useContext(AuthContext)
  const [title, setTitle] = useState('Ektélesi')

  const firstVideo = initialVideos.find(({ id }) => +id === +eventSettings.openingVideoId)
  const [activeVideo, setActiveVideo] = useState(firstVideo)

  const setActiveVideoRoute = video => {
    setActiveVideo(video) // this is a fallback
    router.push('/videos/[id]', `/videos/${video.id}`, { shallow: true })
  }

  useEffect(() => {
    const currentVideo = videos.find(({ id }) => +id === +currentVideoId) || firstVideo
    setActiveVideo(currentVideo)
    setTitle(`${currentVideo.title} - Ektélesi`)
  }, [currentVideoId, videos])

  useEffect(() => {
    if (!isLoggedIn) {
      setVideos(initialVideos)
    } else if (user.videos) {
      setVideos(user.videos)
    }
  }, [isLoggedIn, user])

  return eventSettings.eventDidBegin ? (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Workshop
        eventSettings={eventSettings}
        {...props}
        videos={videos}
        activeVideo={activeVideo}
        setActiveVideoRoute={setActiveVideoRoute}
      />
    </>
  ) : (
    <Building {...eventSettings} />
  )
}

export async function getStaticPaths() {
  const paths = getAllVideos()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps() {
  const eventSettings = getEventProps()
  const initialVideos = validateVideoPremieres(getInitialVideos(), eventSettings.day0TimeInMs)

  return {
    props: {
      eventSettings,
      initialVideos,
      contents: getContent().contentList,
      sponsorList: getSponsors().sponsorList
    }
  }
}
