import PropTypes from 'prop-types'

import { makeStyles } from './styles'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import HeroText from '../../components/sections/HeroSection/HeroText'

export default function Parallax({ children, heroTitle, heroSubtitle, src, alt, overlayColor }) {
  const styles = makeStyles({ overlayColor, src })
  return (
    <>
      <div className="parallax__wrapper">
        <Navbar />
        <span className="parallax__content">
          <HeroText title={heroTitle} subtitle={heroSubtitle} />
        </span>
        <span className="parallax__background-image" role="img" aria-label={alt} />
        <main className="parallax parallax__section">{children}</main>
        <Footer />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

Parallax.defaultProps = {
  overlayColor: 'rgba(0, 0, 0, 0)',
  alt: '',
  heroSubtitle: ''
}

Parallax.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  heroTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  heroSubtitle: PropTypes.string,
  alt: PropTypes.string,
  overlayColor: PropTypes.string
}
