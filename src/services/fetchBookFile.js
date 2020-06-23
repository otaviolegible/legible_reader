export const fetchBookFile = async ({ id, jwtToken }) => {
  try {
    const params = `/api/read-book/${id}`
    const res = await fetch(`${process.env.BOOKS}${params}`, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    })
    const book = await res.json()
    return book
  } catch(e) {
    console.log(e)
  }
}