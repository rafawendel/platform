import { useRouter } from 'next/router'
import Landing from './landing'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/ektelesi')
  }, [])
  return <Landing />
}
