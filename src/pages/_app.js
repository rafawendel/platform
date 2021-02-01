import PropTypes from 'prop-types'
import Head from 'next/head'

import '../styles/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { useCallback, useState } from 'react'
import NextProgress from '../components/common/NProgress'
import { AuthContext } from '../context/auth'

function App({ Component, pageProps }) {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [videos, setVideos] = useState([])
  const [isLoading, setLoading] = useState(false)

  const login = useCallback(() => {
    setLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setLoggedIn(false)
  }, [])

  return (
    <>
      <Head>
        <title>GEDAAM</title>
      </Head>
      <NextProgress isLoading={isLoading} />
      <AuthContext.Provider value={{ isLoggedIn, login, logout, user, setUser, videos, setVideos }}>
        <Component {...pageProps} setLoading={setLoading} />
      </AuthContext.Provider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App
