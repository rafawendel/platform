import PropTypes from 'prop-types'
import Head from 'next/head'

import '../styles/index.css'
import '@fortawesome/fontawesome-free/css/all.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>{}</Head>
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App
