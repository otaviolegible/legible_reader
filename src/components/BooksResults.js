import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useLocation } from 'react-router-dom'
import { fetchSearchResults } from '../services'

const handleBooks = async ({ setBooks, setFetch, search }) => {
  setFetch({ isReady: false, isLoading: true })
  const list = await fetchSearchResults({ keywords: search })
  setBooks(list)
  setFetch({ isLoading: false, isReady: true })
}

const BooksResults = ({
  books: initialBooks = []
}) => {
  const [ books, setBooks ] = useState(initialBooks)
  const [ fetch, setFetch ] = useState({ isLoading: false, isReady: false })
  const { formatMessage: f } = useIntl()
  const { search } = useLocation()

  useEffect(() => {
    if(search && !fetch.isLoading) {
      setBooks([])
      setFetch({})
    }
  }, [search])

  if(books.length === 0 && !fetch.isLoading && !fetch.isReady) handleBooks({ setBooks, setFetch, search })

  if(books.length === 0 && !fetch.isLoading && fetch.isReady) return <p>No books :(</p>

  if(fetch.isLoading) return null

  return (
    <>
      <h2>{f({id: 'title'}, {total: books.length})}</h2>
      <ul>
        {books.map((book, i) => (
          <li key={i} style={{ borderBottom: '1px solid black' }}>
            <Link to={`/book/${book.id}`}><img src={book.cover.url} height="180px" /></Link>
            <h2>{book.title}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}

export default BooksResults