import { useRouter } from 'next/router'
import axios from 'axios'
import { useContext, useEffect } from 'react'
import LoginForm from '../../components/forms/UserForm'
import { AuthContext } from '../../context/auth'

export default function LoginPage({ setLoading }) {
  const router = useRouter()
  const { isLoggedIn, login, logout, user, setUser } = useContext(AuthContext)

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(false)
      alert(`Bem vindo, ${user.fullname.split(' ')[0]}!`)
      router.push('/videos/[id]', `/videos/${user.currentVideo.id}`)
    }
  }, [isLoggedIn, router, user, setLoading])

  const onSubmit = async (values, { setSubmitting }) => {
    setLoading(true)

    await axios
      .post('/api/login', values)
      .then(res => {
        const { user } = res.data
        if (user) {
          setUser({ ...user })
          login()
        } else {
          logout()
        }
      })
      .catch(e => alert('Os dados inseridos são inválidos'))
    setLoading(false)
    setSubmitting(false)
  }

  return (
    <main className="bg-dark text-darker w-full min-h-screen">
      <div className="flex flex-col items-start justify-start md:items-center py-8 px-12">
        <h3>Fazer Check-in</h3>
        <div className="w-full md:w-1/2">
          <LoginForm colorMode="dark" onSubmit={onSubmit} />
        </div>
      </div>
    </main>
  )
}
