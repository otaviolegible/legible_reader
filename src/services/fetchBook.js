export const fetchBook = async ({ id }) => {
  try {
    const params = `/api/book/${id}`
    const res = await fetch(`${process.env.BOOKS}${params}`)
    const book = await res.json()
    return book
  } catch(e) {
    console.log(e)
  }
}