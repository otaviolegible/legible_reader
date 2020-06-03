export const fetchBookFile = async ({ id, language }) => {
  try {
    const params = `/read-book/${language}/${id}`
    const res = await fetch(`${process.env.BOOKS}${params}`)
    const book = await res.json()
    console.log(book)
    return book
  } catch(e) {
    console.log(e)
  }
}