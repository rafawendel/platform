import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import SubscriptionForm from '../../components/Forms/Subscription/SubscriptionForm'
import { AuthContext } from '../../context/auth'
import { FormTypes } from '../../components/Forms/Fields'

export default function Subscribe({ fields }) {
  const router = useRouter()
  const { isLoggedIn, login, logout, user, setUser } = useContext(AuthContext)

  useEffect(() => {
    if (isLoggedIn) {
      // setLoading(false)
      alert(`Bem vindo, ${user.fullname.split(' ')[0]}!`)
      router.push('/videos/[id]', `/videos/${user.currentVideo.id}`)
    }
  }, [isLoggedIn, router, user])

  const onSubmit = async (values, { setSubmitting }) => {
    // setLoading(true)

    await axios
      .post('/api/login', values)
      .then(res => {
        const { user } = res.data
        console.log(user)
        if (user) {
          setUser({ ...user })
          login()
        } else {
          logout()
        }
      })
      .catch(e => alert('Os dados inseridos são inválidos'))
    // setLoading(false)
    setSubmitting(false)
  }

  return (
    <main className="bg-light text-darker w-full min-h-screen">
      <div className="flex flex-col items-start justify-start md:items-center py-8 px-12">
        <h5>Inscrição GEDAAM</h5>
        <div className="w-full md:w-3/4">
          <SubscriptionForm onSubmit={onSubmit} fields={fields} />
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const fields = []

  return {
    props: {
      fields
    }
  }
}
