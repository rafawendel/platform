import { useField } from 'formik'
import { ErrorMessage } from '../Messages'

export const TextInput = ({ label, tooltip, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className="first:mt-8 relative w-full mb-3">
        {/* {tooltip && (
          <ReactTooltip id={`tooltip-${props.id}`} {...tooltip}>
            <p className="text-xs font-normal">{tooltip.content}</p>
          </ReactTooltip>
        )} */}
        <label
          className="block uppercase text-xs font-bold mb-2"
          htmlFor={props.id || props.name}
          // data-tip
          // data-for={`tooltip-${props.id}`}
        >
          {label}
        </label>
        <input
          className="text-input text-darker px-3 py-3 placeholder-dark placeholder-opacity-75 bg-white rounded text-sm shadow focus:outline-none w-full"
          {...field}
          {...props}
        />
        {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
      <style jsx>{`
        /* input:not(:placeholder-shown):invalid { */
        input${meta.touched && meta.error ? '' : ':focus'} {
          box-shadow: 0 0 0 3px
            ${meta.touched && meta.error ? 'rgba(229, 62, 62, 0.5)' : 'rgba(66, 153, 225, 0.5);'};
        }
      `}</style>
    </>
  )
}

export const TypeInput = ({ field, meta, className, notAllowedCharRegex, ...props }) => {
  return (
    <div className="w-full">
      <input
        className={`text-darker px-px pt-3 pb-1 placeholder-dark placeholder-opacity-75 bg-transparent border-b-2 border-dark text-sm focus:outline-none shadow-none w-full ${className}`}
        {...field}
        {...props}
        onKeyPress={event => {
          if (notAllowedCharRegex && new RegExp(notAllowedCharRegex, 'gi').test(event.key)) {
            event.preventDefault()
          }
        }}
      />
      <div className="ml-px w-full h-12 md:h-6">
        {(meta.value || meta.touched) && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
    </div>
  )
}
