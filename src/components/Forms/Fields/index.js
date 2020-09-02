import React, { useEffect, useRef, useState } from 'react'
import { useField } from 'formik'
import { TypeInput } from './Inputs'
import { RadioField } from './Radio'
import { useKeyPress } from '../../../hooks/useKeyPress'
import { PrimaryActionButton, SecondaryActionButton } from '../Buttons'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}

export const FieldWrapper = ({
  id,
  name,
  className,
  label,
  description,
  keyPressHandler,
  advanceForm,
  recedeForm,
  isSubmitting,
  showSubmitButton,
  showRecedeButton,
  children,
  ...props
}) => {
  const [field, meta, helper] = useField(name)

  const [isFirstRender, setFirstRender] = useState(true)
  useEffect(() => {
    if (isFirstRender) {
      helper.setValue(window.sessionStorage.getItem(name))
      setFirstRender(false)
    }
    window.sessionStorage.setItem(name, meta.value || '')
  }, [meta.value, name])

  const fieldRef = useRef(null)
  useEffect(() => {
    const childInput = fieldRef.current && fieldRef.current.querySelector('input')
    if (childInput && !className.includes('hidden')) {
      childInput.focus()
      childInput.select()
    }
  }, [className])

  // const properties = props
  // Object.entries(props).reduce((newProps, [key, value]) => {
  //   newProps[key] = typeof value === 'function' ? value() : value
  //   if (typeof newProps[key] === 'object') delete newProps[key]
  //   return newProps
  // }, {})

  const enterPressHandler = () => {
    if (!meta.error) keyPressHandler(isSubmitting)
  }
  useKeyPress('Enter', enterPressHandler)

  return (
    <div className={className}>
      <div ref={fieldRef} className="flex flex-col items-start mt-16 w-full">
        <label className="mb-2" htmlFor={id || name}>
          <h5>{label}</h5>
          <p>{description}</p>
        </label>
        {React.cloneElement(children, { ...props, field, meta, name })}
        <div className="flex justify-between items-center mt-3 w-full">
          {showSubmitButton ? (
            <PrimaryActionButton type="submit" disabled={isSubmitting || !meta.value || meta.error}>
              Enviar
            </PrimaryActionButton>
          ) : (
            <PrimaryActionButton onClick={advanceForm} disabled={!meta.value || meta.error}>
              Ok
            </PrimaryActionButton>
          )}
          {showRecedeButton && (
            <SecondaryActionButton onClick={recedeForm}>Voltar</SecondaryActionButton>
          )}
        </div>
      </div>
    </div>
  )
}

export const FormField = ({ type, formType, ...props }) => {
  const getField = () => {
    switch (type) {
      case FormTypes.DRAG_AND_DROP:
        return <div type={formType} />
      case FormTypes.DROPDOWN:
        return <div type={formType} />
      case FormTypes.AREA:
        return <div type={formType} />
      case FormTypes.CHECKBOX:
        return <div type={formType} />
      case FormTypes.RADIO:
        return <RadioField type={formType} />
      default:
        return <TypeInput type={formType} />
    }
  }

  return <FieldWrapper {...props}>{getField()}</FieldWrapper>
}
