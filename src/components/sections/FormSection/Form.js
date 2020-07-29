import FormCard from '../../common/Cards/FormCard'

export default function Form() {
  return (
    <FormCard title="Inscreva" details="lorem ipsum dolor sit amet" buttonText="INSCREVER">
      {' '}
      <div className="relative w-full mb-3 mt-8">
        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
          Full Name
        </label>
        <input
          type="text"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
          placeholder="Full Name"
          style={{ transition: 'all .15s ease' }}
        />
      </div>
      <div className="relative w-full mb-3">
        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
          placeholder="Email"
          style={{ transition: 'all .15s ease' }}
        />
      </div>
      <div className="relative w-full mb-3">
        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          rows="4"
          cols="80"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
          placeholder="Type a message..."
        />
      </div>
    </FormCard>
  )
}
