import { merge, reduce } from 'lodash'
import * as Yup from 'yup'
import * as subscriptionFormFields from '../forms/Subscription/fields'
import * as researchFormFields from '../forms/Research/fields'

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

const formFields = merge(subscriptionFormFields, researchFormFields)

export const getFormSchemaByName = name => formFields[name]
