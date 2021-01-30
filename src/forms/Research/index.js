import { reduce } from 'lodash'
import Head from 'next/head'
import TypingForm from '../../components/forms/TypingForm'
import * as fields from './fields'

export default function ResearchForm({ onSubmit, ...props }) {
  const amassedFields = reduce(fields, (acc, curr) => [...acc, ...curr], [])

  return (
    <>
      <Head>
        <title>Motirõ GEDAAM</title>
      </Head>
      <main className="bg-light text-darker w-full min-h-screen overflow-x-hidden overflow-y-auto py-20">
        <TypingForm
          id="research"
          fields={amassedFields}
          title="Motirõ GEDAAM"
          onSubmit={onSubmit}
          {...props}
        />
      </main>
    </>
  )
}
