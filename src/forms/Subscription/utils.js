import * as Yup from 'yup'
import * as formFields from './fields'

export const getInitialValues = fields => {
  return fields.reduce((values, { name, initialValue }) => {
    values[name] = initialValue || ''
    return values
  }, {})
}

export const getValidationSchema = fields => {
  return Yup.object(
    fields.reduce((schema, { name, validator }) => {
      schema[name] = validator
      return schema
    }, {})
  )
}

export const getFormSchemaByName = name => formFields[name]
