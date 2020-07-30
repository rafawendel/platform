import { useField } from 'formik'

export const ErrorMessage = ({ children }) => {
  return (
    <>
      <div className="error text-red-600 text-xs mt-1 w-auto">{children}</div>
      <style jsx>{`
        .error::before {
          content: '❌ ';
          font-size: 0.5rem;
          vertical-align: 0.2em;
        }
      `}</style>
    </>
  )
}

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className="first:mt-8 relative w-full mb-3">
        <label className="block uppercase text-xs font-bold mb-2" htmlFor={props.id || props.name}>
          {label}
        </label>
        <input
          className="text-input text-darker px-3 py-3 placeholder-dark placeholder-opacity-75 bg-white rounded text-sm shadow focus:outline-none w-full"
          {...field}
          {...props}
        />
        {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
      <style jsx>{`
        input${meta.touched && meta.error ? '' : ':focus'} {
          box-shadow: 0 0 0 3px
            ${meta.touched && meta.error ? 'rgba(229, 62, 62, 0.5)' : 'rgba(66, 153, 225, 0.5);'};
        }
      `}</style>
    </>
  )
}
