import React, { useEffect, useRef } from 'react'
import { FieldElement } from './FieldElement'
import { useStorage } from '../../../hooks/useStorage'

export const FieldWrapper = function FieldWrapper({ formProps, formType, ...props }) {
  const { name, helper, meta } = formProps
  useStorage(name, meta.value, helper.setValue)

  const fieldRef = useRef(null)
  useEffect(() => {
    const childInput = fieldRef.current && fieldRef.current.querySelector('input')
    if (childInput /* && !isFieldHidden */) {
      childInput.focus()
      childInput.select()
    }
  }, [])

  return (
    <div ref={fieldRef} className="w-full">
      <FieldElement formProps={formProps} type={formType} {...props} />
    </div>
  )
}
