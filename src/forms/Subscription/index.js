import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import TypingForm from '../../components/forms/TypingForm'
import { getFormSchemaByName } from './utils'
import { useStorage } from '../../hooks/useStorage'
import PlainModal from '../../components/common/Modals/PlainModal'
import { PrimaryActionButton } from '../../components/forms/Buttons'

const countdown = time => () => new Promise(resolve => setTimeout(resolve, time))
export default function SubscriptionForm({ setLoading, ...props }) {
  const forms = [
    { title: 'Inscrição GEDAAM', id: 'primary' },
    { title: 'Motirõ GEDAAM', id: 'research' }
  ]
  const [currentFormIndex, setCurrentFormIndex] = useState(0)
  useStorage('lastFormIndex', currentFormIndex, setCurrentFormIndex, true)
  const [uid, setUid] = useState(Math.random().toString(36).substring(2))
  useStorage('uid', uid, setUid, true)
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('Obrigado!')
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const countdown5s = countdown(5000)
    if (currentFormIndex >= forms.length) {
      setModalMessage(
        'Você já submeteu este formulário, gostaria de submeter novamente? Isto acarretará no anulamento da resposta anterior.'
      )
      setShowButton(true)
      setShowModal(true)

      countdown5s()
        .then(() => {
          if (showButton) {
            setModalMessage('Fechando a página em 5 segundos...')
            return countdown5s()
          }
        })
        .then(() => {
          if (showButton) {
            router.push('/eventos')
          }
        })
    }
  }, [currentFormIndex, forms.length, router])

  const clearState = () => {
    setShowButton(false)
    setShowModal(false)
    window.sessionStorage.clear()
    setCurrentFormIndex(0)
  }

  const onSubmit = async (values, { setSubmitting }) => {
    setLoading(true)
    setSubmitting(true)

    await axios
      .post('/api/submit', {
        ...values,
        id: uid,
        formId: forms[currentFormIndex].id
      })
      .then(res => {
        const { message } = res.data
        console.log(message)
        setModalMessage('Obrigado!')
        setShowModal(true)
        countdown(3000)().then(() => {
          setShowModal(false)
          setCurrentFormIndex(p => p + 1)
        })
      })
      .catch(_e => {
        setModalMessage('Os dados inseridos são inválidos')
        setShowModal(true)
      })

    setLoading(false)
    setSubmitting(false)
  }

  return (
    <>
      <Head>
        <title>Inscreva-se no GEDAAM</title>
      </Head>
      <main className="bg-light text-darker w-full min-h-screen overflow-x-hidden overflow-y-auto py-20">
        <PlainModal show={showModal} setActive={setShowModal}>
          <h5 className="px-2 lg:px-6 py-8 text-center">{modalMessage}</h5>
          {showButton && (
            <PrimaryActionButton type="button" onClick={clearState}>
              Reiniciar
            </PrimaryActionButton>
          )}
        </PlainModal>
        {forms.map(
          (form, i) =>
            currentFormIndex === i && (
              <TypingForm
                id={i}
                currentFormIndex={currentFormIndex}
                key={form.id}
                fields={getFormSchemaByName(form.id)}
                title={form.title}
                onSubmit={onSubmit}
                {...props}
              />
            )
        )}
      </main>
    </>
  )
}
