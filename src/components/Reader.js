import fetch from 'isomorphic-fetch'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Reader as ReaderWrapper } from 'legible-ui-components';
import ePub from 'epubjs';

import Epub from './Epub'
import { fetchBook } from '../services'

const Reader = ({
  location: initiaLocation = null,
  book: initialBook = {
    id: null,
    book: { data: null }
  }
}) => {
  const [ book, setBook ] = useState(initialBook)
  const [ fetching, setFetch ] = useState({ isLoading: false, isReady: false })
  const history = useHistory()
  const { id, location } = useParams()

  const handleBook = async () => {
    setFetch({ isReady: false, isLoading: true })
    const book = await fetchBook({ id })
    setBook(book)
    setFetch({ isLoading: false, isReady: true })
  }
  
  
  useEffect(() => {
    if(book.id || fetching.isLoading || fetching.isReady) return
      handleBook()
  }, [book, location])

  if(!book && !fetching.isLoading && fetching.isReady) return <p>No book :(</p>

  if(fetching.isLoading) return <p>loading</p> 

  return (
    <ReaderWrapper>
      <Epub url={book.book} />
      {/* <EpubView
        url={url}
        location={location !== undefined && decodeURIComponent(location)}
        locationChanged={epubcifi => history.push(`/read/${book.id}/${encodeURIComponent(epubcifi)}`)}
      /> */}
    </ReaderWrapper>
  )
}

export default Reader
