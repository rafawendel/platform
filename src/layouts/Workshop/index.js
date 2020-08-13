import dynamic from 'next/dynamic'
import VideoSection from '../../components/sections/VideoSection'
import SourceSection from '../../components/sections/SourceSection/DarkSourceSection'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import Link from 'next/link'
import ExtraVideoSection from '../../components/sections/ExtraVideoSection'

export default function Workshop(props) {
  const { isLoggedIn, user } = useContext(AuthContext)

  const SponsorSection = dynamic(
    () => import('../../components/sections/SponsorSection')
  )

  return (
    <>
      <main className="w-full bg-dark text-light">
        <div className="flex justify-center text-dark bg-transparent w-full py-6">
          {!isLoggedIn &&
          <Link href="/login">
            <button
              type="button"
              className="bg-light opacity-75 hover:opacity-100 px-6 py-2 rounded-md align-middle"
              >
              <h5>Fazer Check-in</h5>
            </button>
          </Link>}
        </div>
        <VideoSection {...props} />
        {user.extraVideo && <ExtraVideoSection video={user.extraVideo} />}
        <h2 className="pb-4 md:pb-8 text-center">{props.title}</h2>
        <SourceSection className="bg-dark" {...props} />
      </main>
      <SponsorSection  {...props} />
    </>
  )
}
