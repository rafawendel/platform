import { TypeInput } from '../Fields/Inputs'
import { RadioField } from '../Fields/Radio'
import { Dropdown } from '../Fields/Dropdown'
import { Checkbox } from '../Fields/Checkbox'
import { DiscreteSlider } from '../Fields/Slider'
import { DragAndDrop } from '../Fields/DragAndDrop'
import { FieldWrapper } from './FieldWrapper'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  SLIDER: 'SLIDER',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}
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
      case FormTypes.INPUT:
        return <TypeInput type={formType} />
      default:
        return <span />
    }
  }

  return <FieldWrapper {...props}>{getField()}</FieldWrapper>
}
