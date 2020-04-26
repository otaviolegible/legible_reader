export const fetchSearchResults = async ({ keywords }) => {
  try {
    const params = `search=${keywords}`
    const res = await fetch(`${process.env.SEARCH}&${params}`, {
      headers: { 'api-key': process.env.SEARCH_API_KEY }
    })
    const { value } = await res.json()
    return value
  } catch(e) {
    console.log(e)
  }
}