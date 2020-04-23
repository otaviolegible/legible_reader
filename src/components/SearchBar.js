import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Autosuggest } from 'legible-ui-components'

const suggestOptions = { headers: { 'api-key': process.env.AUTOSUGGEST_API_KEY } }

const fetchSuggestion = async suggestion => {
  const res = await fetch(
    `${process.env.AUTOSUGGEST}&search=${suggestion}`,
    suggestOptions
  )
  const { value } = await res.json()
  return value.map(v => v['@search.text'])
}

const getSuggestions = async suggestion => {
  const suggestions = await fetchSuggestion(suggestion)
  return suggestions
}

const autosuggest = keywords => keywords.length >= 3 ? getSuggestions(keywords) : []

const SearchBar = ({
  keywords: initialKeywords = ''
}) => {
  const [ keywords, setKeywords ] = useState(initialKeywords)
  const history = useHistory()

  return (
    <Autosuggest
      keywords={keywords}
      onChange={value => setKeywords(value)}
      onSearch={value => history.push(`search?${value}`)}
      suggestions={autosuggest(keywords)}
    />
  )
}

export default SearchBar