import { Field } from 'formik'

export default function RadioField({}) {
  return (
    <div role="group" aria-labelledby="my-radio-group">
      <label>
        <Field type="radio" name="picked" value="One" />
        One
      </label>
      <label>
        <Field type="radio" name="picked" value="Two" />
        Two
      </label>
    </div>
  )
}
