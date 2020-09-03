import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState, useCallback, useEffect } from 'react'
import { FormField } from '../Fields'
import { fields } from './fields'

export default function SubscriptionForm() {
  const [activeFieldIndex, setActiveFieldIndex] = useState(0)
  const [previousFieldIndex, setPreviousFieldIndex] = useState(0)
  const [showSubmitButton, setShowSubmitButton] = useState(false)

  const advanceForm = useCallback(() => {
    setPreviousFieldIndex(activeFieldIndex)
    setActiveFieldIndex(previous => previous + 1)
  }, [activeFieldIndex])

  const recedeForm = useCallback(() => {
    setPreviousFieldIndex(activeFieldIndex)
    setActiveFieldIndex(previous => previous - 1)
  }, [activeFieldIndex])

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    setTimeout(() => {
      alert(JSON.stringify(values))
      setSubmitting(false)
    }, 200)
  }

  useEffect(() => {
    setShowSubmitButton(activeFieldIndex >= fields.length - 1)
  }, [activeFieldIndex])

  const keyPressHandler = useCallback(
    isSubmitting => {
      if (!isSubmitting && showSubmitButton) {
        onSubmit()
      } else {
        advanceForm()
      }
    },
    [advanceForm, showSubmitButton]
  )

  return (
    <>
      <Formik
        initialValues={fields.reduce((values, { name, initialValue }) => {
          values[name] = initialValue || ''
          return values
        }, {})}
        validationSchema={Yup.object(
          fields.reduce((schema, { name, validator }) => {
            schema[name] = validator
            return schema
          }, {})
        )}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, validateField }) => (
          <Form>
            {fields.map((properties, i) => (
              // changing state will cause every field to re-render, which is not optimal
              <FormField
                key={properties.id || properties.name}
                id={i}
                activeFieldIndex={activeFieldIndex}
                previousFieldIndex={previousFieldIndex}
                keyPressHandler={keyPressHandler}
                isSubmitting={isSubmitting}
                autoFocus={i === 0}
                showSubmitButton={showSubmitButton}
                showRecedeButton={activeFieldIndex > 0}
                advanceForm={advanceForm}
                recedeForm={recedeForm}
                validateField={i === 0 && validateField}
                {...properties}
              />
            ))}
          </Form>
        )}
      </Formik>
    </>
  )
}
