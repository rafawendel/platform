import PropTypes from 'prop-types'

export default function HeroText({ title, subtitle, previewText }) {
  return (
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="pr-12">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h6 className="text-xl mt-4">{previewText}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroText.defaultProps = {
  subtitle: ''
}

HeroText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
