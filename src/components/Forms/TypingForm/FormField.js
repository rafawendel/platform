import { TypeInput } from '../Fields/Inputs'
import { RadioField } from '../Fields/Radio'
import { Dropdown } from '../Fields/Dropdown'
import { Checkbox } from '../Fields/Checkbox'
import { DiscreteSlider } from '../Fields/Slider'
import { DragAndDrop } from '../Fields/DragAndDrop'
import { FieldWrapper } from './FieldWrapper'
import { ButtonSet } from './ButtonSet'
import { Label } from './Label'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  SLIDER: 'SLIDER',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}
const getField = (type, formType) => {
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
    case FormTypes.INPUT:
      return <TypeInput type={formType} />
    default:
      return <span />
  }
}
export const FormField = ({ type, formType, ...props }) => {
  return type ? (
    <FieldWrapper {...props}>{getField(type, formType)}</FieldWrapper>
  ) : (
    <div className={`${props.id !== props.activeFieldIndex && 'hidden'} mt-16 w-full`}>
      <Label {...props} />
      <ButtonSet {...props.buttonProps} {...props} value />
    </div>
  )
}
