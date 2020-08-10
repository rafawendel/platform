import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getEventProps } from '../lib/event'
import Building from '../layouts/Workshop/Building'

export default function Ektelesi({ eventSettings }) {
  const router = useRouter()
  const redirect = () => {
    if (eventSettings.eventDidBegin) {
      router.push(`/videos/${eventSettings.openingVideoId}`)
    }
  }

  useEffect(() => {
    redirect()
  })

  return <Building {...eventSettings} onComplete={redirect} />
}

export async function getStaticProps() {
  return {
    props: {
      eventSettings: getEventProps()
    },
    revalidate: 1
  }
}
