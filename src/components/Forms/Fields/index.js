import React, { useEffect, useRef } from 'react'
import { TypeInput } from './Inputs'
import RadioField from './Radio'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}

export const FieldWrapper = ({ id, name, className, label, description, children, ...props }) => {
  const fieldRef = useRef(null)
  useEffect(() => {
    const childInput = fieldRef.current && fieldRef.current.querySelector('input')
    if (childInput && !className.includes('hidden')) {
      childInput.focus()
      childInput.select()
    }
  }, [className])

  console.log(props)
  return (
    <div className={className}>
      <div className="flex flex-col items-start first:mt-8 relative w-full mb-3" ref={fieldRef}>
        <label className="mb-2" htmlFor={id || name}>
          <h5>{label}</h5>
          <p>{description}</p>
        </label>
        {React.cloneElement(children, props)}
      </div>
    </div>
  )
}

export const FormField = ({ type, formType, ...props }) => {
  const properties = props
  // Object.entries(props).reduce((newProps, [key, value]) => {
  //   newProps[key] = typeof value === 'function' ? value() : value
  //   if (typeof newProps[key] === 'object') delete newProps[key]
  //   return newProps
  // }, {})

  const getField = () => {
    switch (type) {
      case FormTypes.DRAG_AND_DROP:
        return <div type={formType} {...properties} />
      case FormTypes.DROPDOWN:
        return <div type={formType} {...properties} />
      case FormTypes.AREA:
        return <div type={formType} {...properties} />
      case FormTypes.CHECKBOX:
        return <div type={formType} {...properties} />
      case FormTypes.RADIO:
        return <RadioField type={formType} {...properties} />
      default:
        return <TypeInput type={formType} {...properties} />
    }
  }

  return <FieldWrapper {...props}>{getField()}</FieldWrapper>
}
