import PropTypes from 'prop-types'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar buttonHref="#Form" transparent />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
