import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/motiro')
  }, [])

  return <p className="w-screen text-center text-4xl h-screen align-middle">Em breve</p>
}
