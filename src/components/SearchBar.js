import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Autosuggest } from 'legible-ui-components'
import { fetchSuggestions } from '../services'

const getSuggestions = async suggestion => {
  const suggestions = await fetchSuggestions(suggestion)
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