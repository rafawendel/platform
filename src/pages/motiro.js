import { useState } from 'react'
import ResearchForm from '../forms/Research'
import { useStorage } from '../hooks/useStorage'

export default function Motiro(props) {
  const [uid, setUid] = useState(Math.random().toString(36).substring(2))
  useStorage('uid', uid, setUid, true)

  return <ResearchForm {...props} />
}
