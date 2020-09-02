import { Field } from 'formik'

export function Checkbox({ name, options }) {
  return (
    <div role="group" aria-labelledby={`${name}-checkbox-group`} className="flex flex-col w-full">
      {options.map(({ label, value }) => (
        <label key={value} htmlFor={value} className="py-1 text-darker text-base">
          <Field type="checkbox" name={name} value={value} className="mr-2" />
          {label}
        </label>
      ))}
    </div>
  )
}
