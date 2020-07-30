import PropTypes from 'prop-types'

import Bubble from './Bubbles/Bubble'

const Dent = () => (
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: '80px' }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
    </svg>
  </div>
)

export default function Footer({ dent }) {
  const socialNetworks = [{ faIconClass: 'fad', bubbleTailwindColor: 'white' }]
  const usefulLinks = [{ name: 'About Us', href: '#' }]
  const otherResources = [{ name: 'About Us', href: '#' }]
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        {dent && <Dent />}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4>Let's keep in touch!</h4>
              <h6 className="mt-0 mb-2">
                Find us on any of these platforms, we respond 1-2 business days.
              </h6>
              <div className="mt-6">
                {socialNetworks.map((properties, i) => (
                  <Bubble size="sm" key={`footer-social-${i}`} {...properties} />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul>
                    {usefulLinks.map(({ name, href }, i) => (
                      <li key={`useful-links-${i + 1}`}>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href={href}
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul>
                    {otherResources.map(({ name, href }, i) => (
                      <li key={`useful-links-${i + 1}`}>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href={href}
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} GEDAAM.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.defaultProps = {
  dent: true
}

Footer.propTypes = {
  dent: PropTypes.bool
}
