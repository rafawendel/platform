import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import { TypeInput } from '../Fields/Inputs'
import { RadioField } from '../Fields/Radio'
import { Dropdown } from '../Fields/Dropdown'
import { Checkbox } from '../Fields/Checkbox'
import { DiscreteSlider } from '../Fields/Slider'
import { FieldWrapper } from './FieldWrapper'
import { ButtonSet } from './ButtonSet'
import { Label } from './Label'
import { DragAndDrop } from '../DragAndDrop'
import { Autocomplete } from '../Fields/Autocomplete'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  AUTOCOMPLETE: 'AUTOCOMPLETE',
  SLIDER: 'SLIDER',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}
const getField = type => {
  switch (type) {
    case FormTypes.DRAG_AND_DROP:
      return <DragAndDrop />
    case FormTypes.SLIDER:
      return <DiscreteSlider />
    case FormTypes.DROPDOWN:
      return <Dropdown />
    case FormTypes.AUTOCOMPLETE:
      return <Autocomplete />
    case FormTypes.CHECKBOX:
      return <Checkbox />
    case FormTypes.RADIO:
      return <RadioField />
    case FormTypes.AREA:
      return <TypeInput as="textarea" />
    case FormTypes.INPUT:
      return <TypeInput />
    default:
      return <span />
  }
}
export const FormField = ({
  type,
  id,
  name,
  activeFieldIndex,
  previousFieldIndex,
  advanceForm,
  recedeForm,
  onlyDisplayIf,
  values,
  buttonProps,
  isSubmitting,
  isStepped,
  ...props
}) => {
  const [field, meta, helper] = useField(name || Math.random()) // dummy fallback
  const [isFieldHidden, setFieldHidden] = useState(true)

  const { title, label, description } = props
  const labelProps = { title, label, description, name }

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
  }, [activeFieldIndex, advanceForm, id, onlyDisplayIf, previousFieldIndex, recedeForm, values])

  return (
    !isFieldHidden && (
      <div className="flex flex-col items-start mt-16 w-full">
        <Label {...labelProps} {...props} />
        {type && (
          <FieldWrapper
            formProps={{ name, field, meta, helper, values }}
            buttonProps={buttonProps}
            {...props}
          >
            {getField(type)}
          </FieldWrapper>
        )}
        <ButtonSet
          isActive={!isFieldHidden}
          advanceForm={advanceForm}
          recedeForm={recedeForm}
          isSubmitting={isSubmitting}
          isStepped
          isTransition={!type}
          {...meta}
          {...buttonProps}
        />
      </div>
    )
  )
}
