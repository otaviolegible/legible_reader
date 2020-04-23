import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { useLocation } from 'react-router-dom'

const fetchSearchResults = async ({ keywords }) => {
  try {
    const params = `search=${keywords}`
    const res = await fetch(`${process.env.SEARCH}&${params}`, {
      headers: {
        'api-key': process.env.SEARCH_API_KEY
      }
    })
    const { value } = await res.json()
    console.log('fetchSearchResults', value)
    return value
  } catch(e) {
    console.log(e)
  }
}

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
  const { formatMessage: f } = useIntl();
  const { search } = useLocation()

  useEffect(() => {
    if(search) {
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
          console.log(book),
          <li key={i}>
            <img src={book.cover} />
            <h2>{book.title}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}

export default BooksResults