import LoginForm from '../components/Forms/Login'

export default function LoginPage() {
  const onSubmit = async (values, { setSubmitting }) => {
    await new Promise(r => setTimeout(r, 500))
    alert(JSON.stringify(values))
    setSubmitting(false)
  }

  return (
    <main className="w-full min-h-screen">
      <div className="bg-dark px-16">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h3>Faça seu Login</h3>
          <div className="w-1/2">
            <LoginForm colorMode="dark" onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </main>
  )
}
