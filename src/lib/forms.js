import * as Yup from 'yup'
import subscriptionForm from '../forms/Subscription/fields'
import researchForm from '../forms/Research/fields'

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

export const getFormById = id => [subscriptionForm, researchForm].find(f => f.id === id)
