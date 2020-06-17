import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { Autosuggest } from '@legible/ui-components'
import { fetchSuggestions } from '../services'

const SearchBar = ({
  placeholder = '',
  keywords: initialKeywords = '',
  suggestions: initialSuggestions = []
}) => {
  const [keywords, setKeywords] = useState(initialKeywords)
  const [suggestions, setSuggestions] = useState(initialSuggestions)
  const history = useHistory()

  const handleSugestions = async () => {
    const suggestions = keywords.length > 3 ? await fetchSuggestions(keywords) : []
    const updateSuggestions = suggestions.map(sug => ({ label: sug, value: sug }))
    return setSuggestions(updateSuggestions)
  }

  const handleKeywords = value => setKeywords(value)

  const handleSearch = ({value}) => history.push(`search?${value}`)

  useEffect(() => {
    handleSugestions()
  }, [keywords])

  return (
    <Autosuggest
      placeholder={placeholder}
      keywords={keywords}
      onChange={handleKeywords}
      onSearch={handleSearch}
      suggestions={suggestions}
    />
  )
}

export default SearchBar