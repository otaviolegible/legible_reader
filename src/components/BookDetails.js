import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Container, GridContainer, H1, H2, H3, P } from '@legible/ui-components'
import { fetchBook } from '../services'
import { PurchaseSubscribe, ReadCTA } from '../components'

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
    <GridContainer columns='minmax(19.2rem, 31.3rem) minmax(65%, 1fr)' columnsTablet='repeat(auto-fit, minmax(28rem, 1fr))' gap='4.5rem' as='section'>
      <Container as='aside' maxWidth='31.3rem'>
        <figure>
          <img src={book.cover.url} />
        </figure>
        <ReadCTA book={book} />
      </Container>
      <Container as='article' maxWidth='66rem' margin='0'>
        <H1 className='mb-1'>{book.title}</H1>
        <H2 weight='regular'>{book.subtitle}</H2>
        <H3 className='mt-5'>by {book.creators}</H3>
        <PurchaseSubscribe book={book} />
        <P className='mt-5'>{book.description}</P>
      </Container>
    </GridContainer>
  )
}

export default BookDetails