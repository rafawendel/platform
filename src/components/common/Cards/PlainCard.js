export default function PlainCard({ title, details, faIconClass }) {
  return (
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className={faIconClass} />
      </div>
      <h6 className="text-xl mt-5 font-semibold text-white">{title}</h6>
      <p className="mt-2 mb-4 text-gray-500">{details}</p>
    </div>
  )
}
