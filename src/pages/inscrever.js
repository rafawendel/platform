import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SubscriptionForm from '../components/Forms/Subscription'
import { AuthContext } from '../context/auth'

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
    <>
      <Head>
        <title>Inscreva-se no GEDAAM</title>
      </Head>
      <main className="bg-light text-darker w-full min-h-screen">
        <div className="flex flex-col items-start justify-start md:items-center py-8 px-12">
          <h5>Inscrição GEDAAM</h5>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <SubscriptionForm onSubmit={onSubmit} fields={fields} />
          </div>
        </div>
      </main>
    </>
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
