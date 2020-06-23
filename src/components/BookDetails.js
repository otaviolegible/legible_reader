import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchBook } from '../services'

const BookDetails = ({ book: initialBook = { id: null, cover: { url: null}, pricing: { list: null, sale: null } } }) => {
  const [ book, setBook ] = useState(initialBook)
  const [ isLoading, setIsLoading ] = useState(false)
  const { id } = useParams()

  const handleBook = async () => {
    setIsLoading(true)
    const book = await fetchBook({ id })
    setBook(book)
    setIsLoading(false)
  }
  
  useEffect(() => {
    if(book && !book.id && !isLoading) handleBook()
  }, [book])

  if(!book && !fetch.isLoading && fetch.isReady) return <p>No book :(</p>

  if(fetch.isLoading) return null

  return (
    <>
      <img src={book.cover.url} />
      <h2>{book.title}</h2>
      <Link to={`/read/${id}`}>Read book</Link>
      <Link to={`/purchase/${id}`}>Purchase book: {book.pricing.list}</Link>
    </>
  )
}

export default BookDetails