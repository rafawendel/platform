export function getAllVideoIds() {
  const fileNames = ['1']

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName
      }
    }
  })
}

export function getVideos() {
  return {
    videos: [
      {
        id: '1',
        title: 'MBE',
        slug: 'mbe',
        root: '/videos',
        youtubeId: 'nHsofRsuXfk',
        premiereDay: '0'
      }
    ]
  }
}

export function getVideoData(id) {
  const videoData = [
    {
      id: '1',
      title: 'MBE',
      youtubeId: 'nHsofRsuXfk'
    }
  ]

  return videoData.find(video => video.id === id)
}
