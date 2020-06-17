import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchBook } from '../services'

const BookDetails = ({ book: initialBook = { id: null, cover: { url: null} } }) => {
  const [ book, setBook ] = useState(initialBook)
  const [ fetch, setFetch ] = useState({ isLoading: false, isReady: false })
  const { id } = useParams()

  const handleBook = async () => {
    setFetch({ isReady: false, isLoading: true })
    const book = await fetchBook({ id })
    setBook(book)
    setFetch({ isLoading: false, isReady: true })
  }
  
  useEffect(() => {
    if(book && !book.id && !fetch.isLoading && !fetch.isReady) handleBook()
  }, [book])

  if(!book && !fetch.isLoading && fetch.isReady) return <p>No book :(</p>

  if(fetch.isLoading) return null

  return (
    <>
      <img src={book.cover.url} />
      <h2>{book.title}</h2>
      <Link to={`/read/${id}`}>Read book</Link>
    </>
  )
}

export default BookDetails