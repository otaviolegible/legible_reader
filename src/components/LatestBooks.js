import React, { useState, useEffect } from 'react'
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
      <h2>Latest books</h2>
      <p>latest books</p>
      <ul>
        {books.map((book, i) => (
          <li key={i} style={{ display: 'inline-block' }}>
            <BookPromotion book={book} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default RandomBooks