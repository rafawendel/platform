import Bubble from './Bubbles/Bubble'

export default function Footer() {
  const socialNetworks = [{ faIconClass: 'fad', bubbleTailwindColor: 'white' }]
  const usefulLinks = [{ name: 'About Us', href: '#' }]
  const otherResources = [{ name: 'About Us', href: '#' }]
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
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
