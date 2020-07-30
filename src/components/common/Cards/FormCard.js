export default function FormCard({ title, details, colorMode, children }) {
  return (
    <div className={`w-full lg:w-6/12 px-4 text-${colorMode === 'dark' ? 'lighter' : 'darker'} `}>
      <div
        className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 bg-${
          colorMode === 'dark' ? 'dark' : 'light'
        }`}
      >
        <div className="flex-auto p-5 lg:p-10">
          <h4>{title}</h4>
          <p className="leading-relaxed font-normal mt-1 mb-4 opacity-75">{details}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
