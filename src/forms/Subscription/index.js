import Head from 'next/head'
import TypingForm from '../../components/forms/TypingForm'
import { fields } from './fields'

export default function SubscriptionForm({ ...props }) {
  return (
    <>
      <Head>
        <title>Inscreva-se no GEDAAM</title>
      </Head>
      <main className="bg-light text-darker w-full min-h-screen overflow-x-hidden overflow-y-auto py-20">
        <TypingForm id="primary" fields={fields} title="Inscrição GEDAAM" {...props} />
      </main>
    </>
  )
}
