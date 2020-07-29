import PropTypes from 'prop-types'

import Layout from '../Layout'
import { makeStyles } from './styles'

export default function Parallax({ children, imageSrc, overlayColor }) {
  const [content, section] = children
  const styles = makeStyles({ overlayColor, imageSrc })
  return (
    <Layout>
      <div className="parallax__wrapper">
        <div className="parallax parallax__section">
          <div className="content">{content}</div>
        </div>
        <section>{section}</section>
      </div>
      <style jsx>{styles}</style>
    </Layout>
  )
}

Parallax.defaultProps = {
  overlayColor: 'rgba(0, 0, 0, 0)'
}

Parallax.propTypes = {
  children: [PropTypes.node, PropTypes.node].isRequired,
  imageSrc: PropTypes.string.isRequired,
  overlayColor: PropTypes.string
}
