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
  const Field = properties => {
    switch (type) {
      case FormTypes.DRAG_AND_DROP:
        return <div {...properties} />
      case FormTypes.DROPDOWN:
        return <div {...properties} />
      case FormTypes.AREA:
        return <div {...properties} />
      case FormTypes.CHECKBOX:
        return <div {...properties} />
      case FormTypes.RADIO:
        return <div {...properties} />
      default:
        return <TypeInput {...properties} />
    }
  }

  return <Field type={formType} {...props} />
}
