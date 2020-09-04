import { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import TypingForm from '../components/Forms/TypingForm'
import { fields, research } from '../components/Forms/Subscription/fields'

export default function Subscribe() {
  const router = useRouter()
  const [currentForm, setCurrentForm] = useState(0)

  // const onSubmit = async (values, { setSubmitting }) => {
  //   // setLoading(true)

  //   await axios
  //     .post('/api/login', values)
  //     .then(res => {
  //       const { user } = res.data
  //       if (user) {
  //         setUser({ ...user })
  //         login()
  //       } else {
  //         logout()
  //       }
  //     })
  //     .catch(e => alert('Os dados inseridos são inválidos'))
  //   // setLoading(false)
  //   setSubmitting(false)
  // }

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    setTimeout(() => {
      alert(JSON.stringify(values))
      setSubmitting(false)
      setCurrentForm(p => p + 1)
    }, 200)
  }

  return (
    <>
      <Head>
        <title>Inscreva-se no GEDAAM</title>
      </Head>
      <main className="bg-light text-darker w-full min-h-screen pt-20">
        {[
          { title: 'Inscrição GEDAAM', fields },
          { title: 'Motirõ GEDAAM', fields: research }
        ].map((p, i) => i === currentForm && <TypingForm onSubmit={onSubmit} {...p} />)}
      </main>
    </>
  )
}
