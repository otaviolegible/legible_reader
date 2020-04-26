import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { EpubView } from "react-reader"
import { Reader as ReaderWrapper } from 'legible-ui-components';
import { fetchBook } from '../services'

const useUserState = {
  isSubscribed: true
}

const handleBook = async ({ setBook, setFetch, id }) => {
  setFetch({ isReady: false, isLoading: true })
  const book = await fetchBook({ id })
  setBook(book)
  setFetch({ isLoading: false, isReady: true })
}

const Reader = ({
  location: initiaLocation = null,
  book: initialBook = {
    id: null
  }
}) => {
  const [ book, setBook ] = useState(initialBook)
  const [ fetch, setFetch ] = useState({ isLoading: false, isReady: false })
  const history = useHistory()
  const { id, location } = useParams()
  
  useEffect(() => {
    if(!book.id && !fetch.isLoading && !fetch.isReady) handleBook({ setBook, setFetch, id })
  }, [book, location])

  if(!book && !fetch.isLoading && fetch.isReady) return <p>No book :(</p>

  if(fetch.isLoading) return null

  return (
    <ReaderWrapper>
      <EpubView
        url={book.book}
        location={initiaLocation || decodeURIComponent(location)}
        locationChanged={epubcifi => history.replace(`/read/${book.id}/${encodeURIComponent(epubcifi)}`)}
      />
    </ReaderWrapper>
  )
}

export default Reader
