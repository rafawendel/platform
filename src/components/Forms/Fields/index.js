import React, { useEffect, useRef, useState } from 'react'
import { useField, useFormikContext } from 'formik'
import { TypeInput } from './Inputs'
import { RadioField } from './Radio'
import { PrimaryActionButton, SecondaryActionButton } from '../Buttons'
import { Dropdown } from './Dropdown'
import { Checkbox } from './Checkbox'
import { DiscreteSlider } from './Slider'
import { DragAndDrop } from './DragAndDrop'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  SLIDER: 'SLIDER',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}

export const ButtonSet = ({
  showSubmitButton,
  isFieldHidden,
  advanceForm,
  recedeForm,
  isSubmitting,
  showRecedeButton,
  value,
  error
}) => {
  return (
    <div className="flex justify-between items-center mt-3 w-full">
      {showSubmitButton ? (
        <PrimaryActionButton type="submit" disabled={isSubmitting || !value || error}>
          Enviar
        </PrimaryActionButton>
      ) : (
        <PrimaryActionButton
          onClick={advanceForm}
          clickOnKey="Enter"
          isActive={!isFieldHidden}
          disabled={!value || error}
        >
          Ok
        </PrimaryActionButton>
      )}
      {showRecedeButton && (
        <SecondaryActionButton onClick={recedeForm}>Voltar</SecondaryActionButton>
      )}
    </div>
  )
}

export const FieldElement = ({ withValuesOptionsCb, options, formProps, children, ...props }) => {
  const plainProps = Object.entries(props).reduce((newProps, [key, value]) => {
    newProps[key] = typeof value === 'function' ? value() : value
    if (typeof newProps[key] === 'object') delete newProps[key]
    return newProps
  }, {})
  return React.cloneElement(children, {
    ...plainProps,
    ...formProps,
    options:
      typeof withValuesOptionsCb === 'function'
        ? withValuesOptionsCb(formProps.values, options)
        : options
  })
}

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

export const FormField = ({ type, formType, ...props }) => {
  const getField = () => {
    switch (type) {
      case FormTypes.DRAG_AND_DROP:
        return <DragAndDrop />
      case FormTypes.SLIDER:
        return <DiscreteSlider type={formType} />
      case FormTypes.DROPDOWN:
        return <Dropdown color="white" />
      case FormTypes.CHECKBOX:
        return <Checkbox />
      case FormTypes.RADIO:
        return <RadioField />
      case FormTypes.AREA:
        return <TypeInput as="textarea" type={formType} />
      default:
        return <TypeInput type={formType} />
    }
  }

  return <FieldWrapper {...props}>{getField()}</FieldWrapper>
}
