import Head from 'next/head'
import Countdown from 'react-countdown'

export default function Building() {
  return (
    <>
      <Head>
        <title>Aguarde...</title>
      </Head>
      <div className="w-full min-h-screen bg-darker text-light flex flex-col justify-center items-center">
        <h2>Já estamos quase!</h2>
        <h1>
          Tempo para o evento:{' '}
          <Countdown
            date={new Date('Mon Aug 10 2020 19:00:00 GMT-0300 (Brasilia Standard Time)').getTime()}
          />
        </h1>
      </div>
    </>
  )
}
