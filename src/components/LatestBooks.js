import React, { useState, useEffect } from 'react'
import { BookGrid } from '@legible/ui-components'

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
    <BookGrid>
      {books.map((book, i) => (
        <BookPromotion key={i} book={book} />
      ))}
    </BookGrid>
  )
}

export default RandomBooks