export default function FormCard({ title, subtitle, colorMode, children, ...props }) {
  return (
    <div
      className={`w-full lg:w-8/12 px-4 ${colorMode === 'dark' ? 'text-lighter' : 'text-darker'} `}
      {...props}
    >
      <div
        className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ${
          colorMode === 'dark' ? 'bg-dark' : 'bg-light'
        }`}
      >
        {/* <div className="flex-auto lg:p-10 py-5 text-center">
          <h4>{title}</h4>
          <p className="leading-relaxed font-normal opacity-75 mt-1 mb-4">{subtitle}</p>
        </div> */}
        {children}
      </div>
    </div>
  )
}
