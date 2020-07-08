import React, { useEffect, useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import qs from 'qs'
import { useUserState } from '@legible/context-provider';
import { Reader as ReaderWrapper } from '@legible/ui-components';
import Epub from './Epub'
import Ads from './Ads'
import { fetchBookFile } from '../services'
import { useAuthState } from '@legible/context-provider';

const Reader = ({
  book: initialBook = {
    id: null,
    book: { data: null }
  }
}) => {
  const [ book, setBook ] = useState(initialBook)
  const [isLoading, setIsLoading] = useState(true)
  const { subscription } = useUserState()
  const { session } = useAuthState()
  const history = useHistory()
  const { search } = useLocation()
  const { id } = useParams()
  const { jwtToken } = session

  const { nav } = qs.parse(search, { ignoreQueryPrefix: true })

  const handleBook = async () => {
    setIsLoading(true)
    const book = await fetchBookFile({ id, jwtToken })
    setBook(book)
    setIsLoading(false)
  }

  const handleLocationChange = newNav => history.push(`?nav=${newNav}`)
  
  useEffect(() => {
    if(!book.id || !isLoading) handleBook()
    return () => setBook(initialBook)
  }, [])

  if(isLoading) return <p>loading</p> 

  if(subscription.id) return (
    <ReaderWrapper>
      <Epub 
        url={book.book}
        location={nav}
        locationChanged={handleLocationChange}
      />
    </ReaderWrapper> 
  )

  if(book && !subscription.id) return (
    <ReaderWrapper>
      <Ads />
      <Epub 
        url={book.book}
        location={nav}
        locationChanged={handleLocationChange}
      />
    </ReaderWrapper>
  )

  return <p>No book :(</p>
}

export default Reader
