const suggestOptions = { headers: { 'api-key': process.env.AUTOSUGGEST_API_KEY } }

export const fetchSuggestions = async suggestion => {
  const res = await fetch(
    `${process.env.AUTOSUGGEST}&search=${suggestion}$filter=status/type eq 'published'`,
    suggestOptions
  )
  const { value } = await res.json()
  return value.map(v => v['@search.text'])
}
