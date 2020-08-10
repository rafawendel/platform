import { getEventProps, getContent, getSponsors } from './api/event'
import { getVideos } from './api/videos'
import Building from '../layouts/Workshop/Building'
import Workshop from '../layouts/Workshop'

export default function Ektelesi({ eventSettings, ...props }) {
  return eventSettings.eventDidBegin ? (
    <Workshop eventSettings={eventSettings} {...props} />
  ) : (
    <Building {...eventSettings} />
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Ektélesi | 1ª Semana GEDAAM',
      colorMode: 'dark',
      eventSettings: getEventProps(),
      videos: getVideos().videos,
      contents: getContent().contentList,
      sponsorList: getSponsors().sponsorList
    }
  }
}
