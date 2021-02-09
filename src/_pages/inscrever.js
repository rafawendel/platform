import { useState } from 'react'
import SubscriptionForm from '../forms/Subscription'
import { useStorage } from '../hooks/useStorage'

export default function Subscription(props) {
  const [uid, setUid] = useState(Math.random().toString(36).substring(2))
  useStorage('uid', uid, setUid, true)

  return <SubscriptionForm {...props} />
}
