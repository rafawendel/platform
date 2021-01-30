import { Field } from 'formik'

export function Dropdown({ options, name, ...props }) {
  return (
    <>
      <div aria-labelledby={`${name}-dropdown`} className="w-1/2">
        <Field
          as="select"
          name={name}
          className="text-darker px-px pt-3 pb-1 placeholder-dark placeholder-opacity-75 bg-transparent border-b-2 border-dark text-sm w-full focus:outline-none shadow-none"
          {...props}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Field>
      </div>
    </>
  )
}
