import React, { useEffect, useRef, useState } from 'react'
import { useField, useFormikContext } from 'formik'

import { ButtonSet } from './ButtonSet'
import { FieldElement } from './FieldElement'

export const FieldWrapper = React.memo(function FieldWrapper({
  id,
  activeFieldIndex,
  previousFieldIndex,
  advanceForm,
  recedeForm,
  isSubmitting,
  buttonProps,
  onlyDisplayIf,
  children,
  ...props
}) {
  const { name, label, description } = props
  const { values } = useFormikContext()
  const [field, meta, helper] = useField(name)
  const [isFieldHidden, setFieldHidden] = useState(true)
  const [isFirstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      const sessionValue = window.sessionStorage.getItem(name)
      if (sessionValue) helper.setValue(sessionValue)
      setFirstRender(false)
    }
    window.sessionStorage.setItem(name, meta.value || '')
  }, [helper, isFirstRender, meta.value, name])

  useEffect(() => {
    if (id === activeFieldIndex) {
      if (typeof onlyDisplayIf === 'function' && !onlyDisplayIf(values)) {
        if (previousFieldIndex > activeFieldIndex) {
          recedeForm()
        } else {
          advanceForm()
        }
      } else {
        setFieldHidden(false)
      }
    } else {
      setFieldHidden(true)
    }
    // console.log(name, isFieldHidden)
  }, [activeFieldIndex, id, values])

  const fieldRef = useRef(null)
  useEffect(() => {
    const childInput = fieldRef.current && fieldRef.current.querySelector('input')
    if (childInput && !isFieldHidden) {
      childInput.focus()
      childInput.select()
    }
  }, [isFieldHidden])

  return (
    <div className={isFieldHidden ? 'hidden' : ''}>
      <div ref={fieldRef} className="flex flex-col items-start mt-16 w-full">
        <label className="mb-2" htmlFor={id || name}>
          <h5>{label}</h5>
          <p>{description}</p>
        </label>
        <FieldElement formProps={{ field, meta, helper, values }} {...props}>
          {children}
        </FieldElement>
        <ButtonSet
          isFieldHidden={isFieldHidden}
          advanceForm={advanceForm}
          recedeForm={recedeForm}
          isSubmitting={isSubmitting}
          {...buttonProps}
          {...meta}
        />
      </div>
    </div>
  )
})
