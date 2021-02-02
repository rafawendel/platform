import MUIAutocomplete from '@material-ui/lab/Autocomplete'
import { TextField } from '@material-ui/core'

export function Autocomplete({ options, name }) {
  return (
    <MUIAutocomplete
      className="text-darker px-px pt-3 pb-1 placeholder-dark placeholder-opacity-75 bg-transparent border-b-2 border-dark text-sm w-full focus:outline-none shadow-none"
      options={options}
      name={name}
      getOptionLabel={option => option.label}
      renderInput={params => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  )
}
