import React, { useState, useEffect } from 'react'
import { BookGrid, H1 } from '@legible/ui-components'

import BookPromotion from './BookPromotion'
import { fetchBooks } from '../services';

const RandomBooks = ({
  books: initialBooks = []
}) => {
  const [books, setBooks] = useState(initialBooks)

  const handleBooks = async () => {
    const res = await fetchBooks()
    setBooks(res)
  }

  useEffect(() => {
    handleBooks()
  }, [])

  return (
    <>
      <H1 className='mb-10'>Browse</H1>
      <BookGrid>
        {books.map((book, i) => (
          <BookPromotion key={i} book={book} />
        ))}
      </BookGrid>
    </>
  )
}

export default RandomBooks