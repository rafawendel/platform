import { useState } from 'react'
import Autosuggest from 'react-autosuggest'

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  }
]

export function Dropdown({ meta, helper }) {
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : languages.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue)
  }

  const getSuggestionValue = suggestion => suggestion.name

  const renderSuggestion = suggestion => <div>{suggestion.name}</div>

  const [suggestions, setSuggestions] = useState([])

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: 'Type a programming language',
    value: meta.value,
    onChange: helper.onChange
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  )
}
