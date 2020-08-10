import Head from 'next/head'
import dynamic from 'next/dynamic'
import VideoSection from '../../components/sections/VideoSection'
import SourceSection from '../../components/sections/SourceSection'

export default function Workshop(props) {
  const SponsorSection = dynamic(
    () => import('../../components/sections/SponsorSection'),
    { ssr: false }
  )

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main className="w-full bg-darker text-light text-center">
        <VideoSection {...props} />
        <h2 className="py-4">{props.title}</h2>
        {/* <SourceSection {...props} /> */}
      </main>
      {/* <SponsorSection  {...props} /> */}
    </>
  )
}
