import { Formik, Form } from 'formik'
import { useState, useCallback, useEffect } from 'react'
import { FormField } from './FormField'
import { useStorage } from '../../../hooks/useStorage'
import { getInitialValues, getValidationSchema } from '../../../lib/forms'

export default function TypingForm({ title, currentFormIndex, id, fields, onSubmit, ...props }) {
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

  const buttonProps = { showSubmitButton, showRecedeButton: activeFieldIndex > 0 }

  const retrieveFieldIndex = index => {
    if (index > fields.length - 1) return
    if (currentFormIndex !== id) return
    setActiveFieldIndex(index)
  }
  useStorage('lastFieldIndex', activeFieldIndex, retrieveFieldIndex)

  useEffect(() => {
    setShowSubmitButton(activeFieldIndex >= fields.length - 1)
  }, [activeFieldIndex, fields])

  return (
    <div className="flex flex-col items-start justify-start md:items-center md:py-8 px-6 md:px-12">
      <h5>{title}</h5>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Formik
          initialValues={getInitialValues(fields)}
          validationSchema={getValidationSchema(fields)}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {fields.map((fieldProps, i) => (
                <FormField
                  key={`field-${i + 1}`}
                  id={i}
                  activeFieldIndex={activeFieldIndex}
                  previousFieldIndex={previousFieldIndex}
                  isSubmitting={isSubmitting}
                  autoFocus={i === 0}
                  buttonProps={buttonProps}
                  advanceForm={advanceForm}
                  recedeForm={recedeForm}
                  values={values}
                  {...props}
                  {...fieldProps}
                />
              ))}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
