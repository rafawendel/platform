import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState, useCallback, useEffect } from 'react'
import { FormField } from './FormField'
import { Label } from './Label'
import { ButtonSet } from './ButtonSet'

export default function TypingForm({ title, fields, onSubmit }) {
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

  useEffect(() => {
    setShowSubmitButton(activeFieldIndex >= fields.length - 1)
  }, [activeFieldIndex, fields])

  return (
    <div className="flex flex-col items-start justify-start md:items-center md:py-8 px-6 md:px-12">
      <h5>{title}</h5>
      <div className="w-full md:w-3/4 lg:w-1/2">
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
          {({ isSubmitting }) => (
            <Form>
              {fields.map(({ type, ...properties }, i) =>
                type ? (
                  <FormField
                    key={properties.id || properties.name}
                    id={i}
                    type={type}
                    activeFieldIndex={activeFieldIndex}
                    previousFieldIndex={previousFieldIndex}
                    isSubmitting={isSubmitting}
                    autoFocus={i === 0}
                    buttonProps={buttonProps}
                    advanceForm={advanceForm}
                    recedeForm={recedeForm}
                    {...properties}
                  />
                ) : (
                  <div className={`${i !== activeFieldIndex && 'hidden'} mt-16 w-full`}>
                    <Label {...properties} />
                    <ButtonSet
                      {...buttonProps}
                      advanceForm={advanceForm}
                      recedeForm={recedeForm}
                      value
                    />
                  </div>
                )
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
