function getVideos() {
  const videos = require('./videos.json')
  return {
    videos
  }
}

export function getAllVideos() {
  const { videos } = getVideos()

  return videos.map(({ id }) => {
    return {
      params: {
        id
      }
    }
  })
}

export function getInitialVideos() {
  const { videos } = getVideos()

  return videos.filter(v => v.isOpen).sort((a, b) => +a.premiereDay > +b.premiereDay)
}

export function validateVideoPremieres(videos, day0TimeInMs) {
  return videos.map(video => {
    const isPremiered =
      Date.now() >= new Date(day0TimeInMs + video.premiereDay * 24 * 60 * 60 * 1000).getTime()
    const youtubeId = isPremiered ? video.youtubeId : ''

    return { ...video, youtubeId, isPremiered }
  })
}

export function getVideoData(vid) {
  const { videos } = getVideos()

  return videos.find(video => +video.id === +vid)
}
