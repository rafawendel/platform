import { getAllVideoIds, getVideoData, getVideos } from '../api/videos'
import { getEventProps, getContent, getSponsors } from '../api/event'
import Ektelesi from '../ektelesi'

export default function Event(props) {
  return <Ektelesi {...props} />
}

export async function getStaticPaths() {
  const paths = getAllVideoIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const videoData = getVideoData(params.id)

  return {
    props: {
      title: 'Ektélesi | 1ª Semana GEDAAM',
      colorMode: 'dark',
      videos: getVideos(),
      eventSettings: getEventProps(),
      contents: getContent().contentList,
      sponsorList: getSponsors()
    }
  }
}
