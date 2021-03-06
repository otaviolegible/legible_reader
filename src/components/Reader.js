import React, { useEffect, useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import Fullscreen from "react-full-screen";
import qs from 'qs'
import { useUserState, useAuthState, useUserDispatch } from '@legible/context-provider';
import { Container, Reader as ReaderWrapper, Spinner } from '@legible/ui-components';
import ReaderNav from './ReaderNav'
import Epub from './Epub'
import Ads from './Ads'
import { fetchBookFile } from '../services'

const Reader = ({
  book: initialBook = {
    id: null,
    book: { data: null }
  }
}) => {
  const [ book, setBook ] = useState({id: null, book: { data: null }})
  const [ bookDetails ] = useState(initialBook)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isFullscreen, setIsFullscreen ]= useState(false);
  const { customer } = useUserState()
  const { setBookProgress } = useUserDispatch()
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

  const progressUpdate = ({location, progress, page}) => setBookProgress(jwtToken, {
    id: bookDetails.id, 
    title: bookDetails.title, 
    cover: bookDetails.cover, 
    location, 
    progress, 
    page 
  })

  const handleLocationChange = newNav => history.push(`?nav=${newNav}`)
  
  const handleFullscreen = () => setIsFullscreen(!isFullscreen)

  useEffect(() => {
    if(!book.id || !isLoading) handleBook()
    return () => setBook(initialBook)
  }, [])

  if(isLoading) return <Spinner overlay />

  if(customer && customer.sub_id) return (
    <ReaderWrapper>
      <Epub 
        url={book.book}
        location={nav}
        locationChanged={handleLocationChange}
        progressUpdate={progressUpdate}
      />
    </ReaderWrapper> 
  )

  if(book && customer && !customer.sub_id) return (
    <ReaderWrapper>
      <Fullscreen enabled={isFullscreen}>
        <Container backgroundColorWhite fullWidth>
          {/* <Ads /> */}
          <ReaderNav
            bookId={id}
            fullscreen={handleFullscreen}
            isFullscreen={isFullscreen}
          />
          <Epub
            url={book.book}
            location={nav}
            locationChanged={handleLocationChange}
            progressUpdate={progressUpdate}
          />
        </Container>
      </Fullscreen>
    </ReaderWrapper>
  )

  return <p>No book :(</p>
}

export default Reader
