export const fetchBooks = async (language = 'en-us') => {
  try {
    const params = `/books/${language}`
    const res = await fetch(`${process.env.BOOKS}${params}`)
    const {books} = await res.json()
    return books
  } catch(e) {
    console.log(e)
  }
}