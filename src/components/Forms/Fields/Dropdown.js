import { Field } from 'formik'

export function Dropdown({ options, name, ...props }) {
  return (
    <>
      <div role="group" aria-labelledby={`${name}-radio-group`} className="flex flex-col w-full">
        <Field as="select" name={name} className="" {...props}>
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
