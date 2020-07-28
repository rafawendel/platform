import PropTypes from 'prop-types';
// import App from 'next/app';
import Head from 'next/head';

import '../assets/index.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>{/* ADD SEO HERE */}</Head>
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};

export default App;
