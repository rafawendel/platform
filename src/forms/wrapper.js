import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import TypingForm from '../components/forms/TypingForm'

export default function Form({ setLoading, form, ...props }) {
  const router = useRouter()

  // const [showModal, setShowModal] = useState(false)
  // const [modalMessage, setModalMessage] = useState('Obrigado!')
  // const [showButton, setShowButton] = useState(false)

  // useEffect(() => {
  //   const countdown5s = countdown(5000)
  //   if (currentFormIndex >= forms.length) {
  //     setModalMessage(
  //       'Você já submeteu este formulário, gostaria de submeter novamente? Isto acarretará no anulamento da resposta anterior.'
  //     )
  //     setShowButton(true)
  //     setShowModal(true)

  //     countdown5s()
  //       .then(() => {
  //         if (showButton) {
  //           setModalMessage('Fechando a página em 5 segundos...')
  //           return countdown5s()
  //         }
  //       })
  //       .then(() => {
  //         if (showButton) {
  //           router.push('/eventos')
  //         }
  //       })
  //   }
  // }, [currentFormIndex, forms.length, router])

  // const clearState = () => {
  //   setShowButton(false)
  //   setShowModal(false)
  //   window.sessionStorage.clear()
  //   setCurrentFormIndex(0)
  // }

  const handleSubmit = useCallback(
    async (values, { setSubmitting }) => {
      setLoading(true)
      setSubmitting(true)

      await axios
        .post('/api/submit', {
          ...values,
          id: JSON.parse(localStorage.getItem('uid')),
          formId: form.id // eslint-disable-line react/no-this-in-sfc
        })
        //   .then(res => {
        //     const { message } = res.data
        //     console.log(message)
        //     setModalMessage('Obrigado!')
        //     setShowModal(true)
        //     countdown(3000)().then(() => {
        //       setShowModal(false)
        //       setCurrentFormIndex(p => p + 1)
        //     })
        //   })
        .catch(err => {
          console.error(err)
          // setModalMessage('Os dados inseridos são inválidos')
          // setShowModal(true)
        })

      setLoading(false)
      setSubmitting(false)

      if (form.id === 'primary') {
        router.push('/motiro')
      }
    },
    [form.id, router, setLoading]
  )

  return (
    <>
      <Head>
        <title>{form.displayTitle}</title>
      </Head>
      <main className="bg-light text-darker w-full min-h-screen overflow-x-hidden overflow-y-auto py-20">
        <TypingForm
          id={form.id}
          fields={form.fields}
          title={form.title}
          onSubmit={handleSubmit}
          {...props}
        />
      </main>
    </>
  )
}

// const countdown = time => () => new Promise(resolve => setTimeout(resolve, time))
/* <PlainModal show={showModal} setActive={setShowModal}>
          <h5 className="px-2 lg:px-6 py-8 text-center">{modalMessage}</h5>
          {showButton && (
            <PrimaryActionButton type="button" onClick={clearState}>
              Reiniciar
            </PrimaryActionButton>
          )}
        </PlainModal> */
