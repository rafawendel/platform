import { Field } from 'formik'
import { useEffect } from 'react'

export function RadioField({ options, name, meta }) {
  useEffect(() => {
    console.log(meta.value)
  }, [meta])
  return (
    <div role="group" aria-labelledby={`${name}-radio-group`} className="flex flex-col">
      {options.map(({ label, value }) => (
        <div className="inline">
          <Field type="radio" name={name} value={value} />
          <label key={value} htmlFor={name}>
            {label}
          </label>
        </div>
      ))}
    </div>
  )
}
