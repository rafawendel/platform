import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import TypingForm from '../components/Forms/TypingForm'
import { getFormSchemaByName } from '../components/Forms/Subscription/utils'
import { useStorage } from '../hooks/useStorage'

export default function Subscribe({ setLoading }) {
  const forms = [
    { title: 'Inscrição GEDAAM', id: 'primary' },
    { title: 'Motirõ GEDAAM', id: 'research' }
  ]
  const [currentFormIndex, setCurrentFormIndex] = useState(0)
  useStorage('lastFormIndex', currentFormIndex, setCurrentFormIndex, true)

  const onSubmit = async (values, { setSubmitting }) => {
    setLoading(true)
    setSubmitting(true)

    // await axios
    //   .post('/api/submit', {})
    //   .then(res => {
    //     const { user } = res.data
    //   })
    //   .catch(e => alert('Os dados inseridos são inválidos'))
    await new Promise(resolve => {
      setTimeout(() => {
        console.log(values)
        resolve(true)
        // window.sessionStorage.clear()
      }, 500)
    })

    setCurrentFormIndex(p => p + 1)
    setLoading(false)
    setSubmitting(false)
  }

  return (
    <>
      <Head>
        <title>Inscreva-se no GEDAAM</title>
      </Head>
      <main className="bg-light text-darker w-full min-h-screen pt-20">
        {forms.map(
          (form, i) =>
            currentFormIndex === i && (
              <TypingForm
                id={form.id}
                key={`form-${form.id}-i`}
                fields={getFormSchemaByName(form.id)}
                title={form.title}
                onSubmit={onSubmit}
              />
            )
        )}
      </main>
    </>
  )
}
