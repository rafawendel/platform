import React from 'react'

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
