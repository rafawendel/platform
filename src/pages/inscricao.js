import { useEffect } from 'react'

export default function RickRoll() {
  useEffect(() => {
    window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }, [])

  return <div />
}
