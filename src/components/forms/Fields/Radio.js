import { Field } from 'formik'

export function RadioField({ options, name }) {
  return (
    <>
      <div role="group" aria-labelledby={`${name}-radio-group`} className="flex flex-col w-full">
        {options.map(({ label, value }) => (
          <label key={value} htmlFor={name} className="py-1 text-darker text-base">
            <Field type="radio" name={name} value={value} className="mr-2" />
            {label}
          </label>
        ))}
      </div>
    </>
  )
}
