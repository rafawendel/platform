function getVideos() {
  const videos = require('./videos.json')
  return {
    videos
  }
}

export function getAllVideos() {
  const { videos } = getVideos()

  return videos.map(video => {
    return {
      params: {
        vid: [video.id]
      }
    }
  })
}

export function getOpenVideos() {
  const { videos } = getVideos()

  return videos.map(video => ({ ...video, youtubeId: null }))
}

export function getVideoData(vid) {
  const { videos } = getVideos()

  return videos.find(video => video.id === vid)
}
