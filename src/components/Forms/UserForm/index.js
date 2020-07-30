import FormCard from '../../common/Cards/FormCard'

export default function UserForm({ title, details, textTailwindColor, buttonText }) {
  return (
    <FormCard title="Inscreva" details="lorem ipsum dolor sit amet" buttonText="INSCREVER">
      <div className="relative w-full mb-3 mt-8">
        <label
          className={`block uppercase text-${textTailwindColor} text-xs font-bold mb-2`}
          htmlFor="full-name"
        >
          Full Name
        </label>
        <input
          type="text"
          className={`px-3 py-3 placeholder-${textTailwindColor} placeholder-opacity-75 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full`}
          placeholder="Full Name"
          style={{ transition: 'all .15s ease' }}
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className={`block uppercase text-${textTailwindColor} text-xs font-bold mb-2`}
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          className={`px-3 py-3 placeholder-${textTailwindColor} placeholder-opacity-75 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full`}
          placeholder="Email"
          style={{ transition: 'all .15s ease' }}
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className={`block uppercase text-${textTailwindColor} text-xs font-bold mb-2`}
          htmlFor="message"
        >
          Message
        </label>
        <textarea rows="4" cols="80" placeholder="Type a message..." />
      </div>
      <style jsx>{`
        input {
          transition: all 0.15s ease;
        }
      `}</style>
    </FormCard>
  )
}
