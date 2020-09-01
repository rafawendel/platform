import { TypeInput } from './Inputs'

export const FormTypes = {
  INPUT: 'INPUT',
  AREA: 'AREA',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
  DRAG_AND_DROP: 'DRAG_AND_DROP'
}

export const FormField = ({ type, formType, ...props }) => {
  switch (type) {
    case FormTypes.DRAG_AND_DROP:
      return <div type={formType} {...props} />
    case FormTypes.DROPDOWN:
      return <div type={formType} {...props} />
    case FormTypes.AREA:
      return <div type={formType} {...props} />
    case FormTypes.CHECKBOX:
      return <div type={formType} {...props} />
    case FormTypes.RADIO:
      return <div type={formType} {...props} />
    default:
      return <TypeInput type={formType} {...props} />
  }
}
