import Head from 'next/head'
import Countdown from 'react-countdown'

export default function Building({ day0TimeInMs, ...props }) {
  return (
    <>
      <Head>
        <title>Aguarde...</title>
      </Head>
      <div className="w-full min-h-screen bg-darker text-light flex flex-col justify-center items-center">
        <h2>Já estamos quase!</h2>
        <h1>
          Tempo para o evento: <Countdown date={day0TimeInMs} {...props} />
        </h1>
      </div>
    </>
  )
}
