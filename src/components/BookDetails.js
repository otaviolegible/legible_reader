import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GridContainer } from '@legible/ui-components'
import { fetchBook } from '../services'
import { ReadCTA } from '../components'

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
    if(!book.id && !isLoading) handleBook()
  }, [book])

  if(!book && !isLoading) return <p>No book :(</p>

  if(isLoading) return <p>Loading</p>

  return (
    <GridContainer columns='minmax(28rem, 30rem) minmax(65%, 1fr)' gap='8rem' as='section'>
      <figure>
        <img src={book.cover.url} />
      </figure>
      <article>
        <h2>{book.title}</h2>
        <ReadCTA book={book} />
      </article>
    </GridContainer>
  )
}

export default BookDetails