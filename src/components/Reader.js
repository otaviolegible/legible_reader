import React, { useEffect, useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import qs from 'qs'
import { Reader as ReaderWrapper } from 'legible-ui-components';

import Epub from './Epub'
import { fetchBookFile } from '../services'

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
  const { search } = useLocation()
  const { language, id, location } = useParams()
  const { nav } = qs.parse(search, { ignoreQueryPrefix: true })

  const handleBook = async () => {
    setFetch({ isReady: false, isLoading: true })
    const book = await fetchBookFile({ id, language })
    setBook(book)
    setFetch({ isLoading: false, isReady: true })
  }

  const handleLocationChange = newNav => history.push(`?nav=${newNav}`)
  
  useEffect(() => {
    if(book.id || fetching.isLoading || fetching.isReady) return
    handleBook()
  }, [book, fetching])

  if(!book && !fetching.isLoading && fetching.isReady) return <p>No book :(</p>

  if(fetching.isLoading) return <p>loading</p> 

  return (
    <ReaderWrapper>
      <Epub 
        url={book.book}
        location={nav}
        locationChanged={handleLocationChange}
      />
    </ReaderWrapper>
  )
}

export default Reader
