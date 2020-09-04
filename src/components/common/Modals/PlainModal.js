export default function PlainModal({
  title,
  subtitle,
  children,
  footer,
  className,
  show,
  setActive
}) {
  return (
    show && (
      <>
        <div className={className}>
          <div className="flex justify-center items-center overflow-x-hidden my-2 fixed inset-0 outline-none focus:outline-none z-50">
            <div className="relative w-full max-h-full my-4 mx-2 md:mx-auto max-w-3xl overflow-y-auto z-50">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <div className="flex flex-col">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    type="button"
                    onClick={() => {
                      setActive(false)
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">{children}</div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                  {footer}
                </div>
              </div>
            </div>
            <div
              className="fixed inset-0 z-40 opacity-50 bg-dark"
              onClick={() => setActive(false)}
            />
          </div>
        </div>
      </>
    )
  )
}
