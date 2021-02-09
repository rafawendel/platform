import MUIAutocomplete from '@material-ui/lab/Autocomplete'
import { ErrorMessage } from '../Messages'

export function Autocomplete({ options, name, label, field, helper, meta, ...props }) {
  return (
    <div className="w-full">
      <MUIAutocomplete
        className="font-sans text-darker px-px pt-3 pb-1 placeholder-dark placeholder-opacity-75 bg-transparent text-sm focus:outline-none shadow-none"
        options={options}
        name={name}
        getOptionLabel={option => option.label}
        freeSolo
        renderInput={({ InputProps, InputLabelProps, inputProps, ...params }) => {
          const { onChange: formikHandleChange, onBlur: formikHandleBlur } = field
          const { onChange: muiHandleChange, onBlur: muiHandleBlur, value: muiValue } = inputProps
          // helper.setValue(muiValue)
          const handleChange = event => {
            muiHandleChange(event)
            formikHandleChange(event)
          }
          const handleBlur = event => {
            muiHandleBlur(event)
            formikHandleBlur(event)
            helper.setValue(muiValue)
          }

          return (
            <div ref={InputProps.ref}>
              <input
                {...params}
                {...field}
                {...inputProps}
                // value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`text-darker px-px pt-3 pb-1 placeholder-dark placeholder-opacity-75 bg-transparent border-b-2 border-dark text-sm focus:outline-none shadow-none w-full ${inputProps.className}`}
                aria-label={label}
                // {...props}
                // onKeyPress={event => {
                //   if (notAllowedCharRegex && new RegExp(notAllowedCharRegex, 'gi').test(event.key)) {
                //     event.preventDefault()
                //   }
                // }}
              />
              <div className="ml-px w-full h-12 md:h-6">
                {(meta.value || meta.touched) && meta.error && (
                  <ErrorMessage>{meta.error}</ErrorMessage>
                )}
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}
