import React, { useEffect, useRef, useState } from 'react'
import { useField, useFormikContext } from 'formik'
import { TypeInput } from './Inputs'
import { RadioField } from './Radio'
import { useKeyPress } from '../../../hooks/useKeyPress'
import { PrimaryActionButton, SecondaryActionButton } from '../Buttons'
import { Dropdown } from './Dropdown'
import { Checkbox } from './Checkbox'
import { DiscreteSlider } from './Slider'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  SLIDER: 'SLIDER',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}

export const FieldWrapper = ({
  id,
  activeFieldIndex,
  name,
  label,
  description,
  keyPressHandler,
  advanceForm,
  recedeForm,
  isSubmitting,
  showSubmitButton,
  showRecedeButton,
  onlyShowIf,
  children,
  options,
  ...props
}) => {
  const { values } = useFormikContext()
  const [isFieldHidden, setFieldHidden] = useState(true)
  const [field, meta, helper] = useField(name)

  useEffect(() => {
    if (id === activeFieldIndex) {
      if (typeof onlyShowIf === 'function' && !onlyShowIf(values)) {
        advanceForm()
      } else {
        setFieldHidden(false)
      }
    } else {
      setFieldHidden(true)
    }
  }, [activeFieldIndex, id, values])

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
    if (childInput && !isFieldHidden) {
      childInput.focus()
      childInput.select()
    }
  }, [isFieldHidden])

  const plainProps = Object.entries(props).reduce((newProps, [key, value]) => {
    newProps[key] = typeof value === 'function' ? value() : value
    if (typeof newProps[key] === 'object') delete newProps[key]
    return newProps
  }, {})

  const enterPressHandler = () => {
    console.log(meta)
    if (!meta.error && meta.value) keyPressHandler(isSubmitting)
  }
  useKeyPress('Enter', enterPressHandler)

  return (
    <div className={isFieldHidden ? 'hidden' : ''}>
      <div ref={fieldRef} className="flex flex-col items-start mt-16 w-full">
        <label className="mb-2" htmlFor={id || name}>
          <h5>{label}</h5>
          <p>{description}</p>
        </label>
        {React.cloneElement(children, { ...plainProps, options, field, meta, helper, name })}
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
        return <Dropdown color="white" type={formType} />
      case FormTypes.AREA:
        return <div type={formType} />
      case FormTypes.CHECKBOX:
        return <Checkbox type={formType} />
      case FormTypes.RADIO:
        return <RadioField type={formType} />
      case FormTypes.SLIDER:
        return <DiscreteSlider type={formType} />
      default:
        return <TypeInput type={formType} />
    }
  }

  return <FieldWrapper {...props}>{getField()}</FieldWrapper>
}
