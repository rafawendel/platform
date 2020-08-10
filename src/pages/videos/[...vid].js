import { useContext, useEffect, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { getVideoData, getOpenVideos, getAllVideos } from '../../lib/videos'
import { getEventProps, getContent, getSponsors } from '../../lib/event'
import Building from '../../layouts/Workshop/Building'
import Workshop from '../../layouts/Workshop'
import { AuthContext } from '../../context/auth'
import PlainModal from '../../components/common/Modals/PlainModal'

export default function Event({ eventSettings, user, ...props }) {
  const router = useRouter()
  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = useCallback(() => {
    setLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setLoggedIn(false)
  }, [])

  useEffect(() => {
    setLoggedIn(user.auth)
  }, [user])

  useEffect(() => {
    const opVideoPath = `/videos/${eventSettings.openingVideoId}`
    if (!isLoggedIn && router.asPath !== opVideoPath) {
      router.push(opVideoPath, undefined, { shallow: true })
    }
  }, [isLoggedIn, eventSettings, router])

  return eventSettings.eventDidBegin ? (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {/* <PlainModal /> */}
      <Workshop eventSettings={eventSettings} {...props} />
    </AuthContext.Provider>
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

export async function getStaticProps({ params }) {
  const videoData = getVideoData(params.vid[0])

  return {
    props: {
      title: 'Ektélesi | 1ª Semana GEDAAM',
      user: {
        auth: true,
        id: null
      },
      colorMode: 'dark',
      eventSettings: getEventProps(),
      videos: getOpenVideos(),
      videoData,
      contents: getContent().contentList,
      sponsorList: getSponsors().sponsorList
    },
    revalidate: 1
  }
}
