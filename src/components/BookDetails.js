import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const fetchBook = async ({ id }) => {
  try {
    const params = `/api/book/${id}`
    const res = await fetch(`${process.env.BOOKS_API}${params}`)
    const book = await res.json()
    return book
  } catch(e) {
    console.log(e)
  }
}

const handleBook = async ({ setBook, setFetch, id }) => {
  setFetch({ isReady: false, isLoading: true })
  const book = await fetchBook({ id })
  setBook(book)
  setFetch({ isLoading: false, isReady: true })
}

const BookDetails = ({
  book: initialBook = {
    id: null
  }
}) => {
  const [ book, setBook ] = useState(initialBook)
  const [ fetch, setFetch ] = useState({ isLoading: false, isReady: false })
  const { id } = useParams()

  
  useEffect(() => {
    if(!book.id && !fetch.isLoading && !fetch.isReady) handleBook({ setBook, setFetch, id })
  }, [book])


  if(!book && !fetch.isLoading && fetch.isReady) return <p>No book :(</p>

  if(fetch.isLoading) return null

  return (
    <>
      <h2>{book.title}</h2>
    </>
  )
}

export default BookDetails