import React, { useEffect, useState } from 'react'
import { Book, Rendition } from 'epubjs'
// import InlineView from 'epubjs/lib/managers/views/inline'

import styled from 'styled-components'

const BookWrapper = styled.div`
  height: 100vh;
  width: 100%;
  #book-area {
    height: 100vh;
    width: 100%;
  }
  iframe {
    height: 100vh;
    width: 100%;
  }
`

const Epub = ({
  url,
  location = 0,
  locationChanged = () => {},
  settings: initialSettings = {
    encoding: 'base64',
    replacements: 'base64'
  },
  options: initialOptions = {
    method: 'continuous',
    width: '100%',
    height: '100%',
    // view: InlineView
  }
}) => {
  const [fetching, setFetch] = useState({ isLoading: false, isReady: false })
  const [nav, setNav] = useState(location)
  const [book, setBook] = useState()
  const [rendition, setRendition] = useState()

  const handleBook = async () => {
    setFetch({ isLoading: true, isReady: false })
    const book = new Book(url, initialSettings)
    await book.loading.navigation
    setBook(book)
    setFetch({ isLoading: false, isReady: true })
  }

  const handleRendition = () => {
    const res = new Rendition(book, initialOptions)
    setRendition(res)
  }

  const handlePrev = () => rendition.prev()

  const handleNext = () => rendition.next()

  const changeLocation = rend => {
    locationChanged(rend.end)
    setNav(rend.end)
  }

  const handleKeyPress = e => {
    switch (e.key) {
      case 'ArrowRight':
        handleNext()
        break;
      case 'ArrowLeft':
        handlePrev()
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if(fetching.isLoading || fetching.isReady) return
    handleBook()
  }, [fetching.isLoading, fetching.isReady])

  useEffect(() => {
    if(fetching.isReady) handleRendition()
  }, [fetching.isReady])

  const initRender = () => {
    rendition.attachTo('book-area')
    rendition.display(nav)
    rendition.on('locationChanged', changeLocation)
    rendition.on('keyup', handleKeyPress)
  }

  useEffect(() => {
    if(rendition) initRender()
  }, [rendition])

  if(!rendition) return <p>loading</p>

  return (
    <>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      <BookWrapper>
        <div id="book-area" />
      </BookWrapper>
    </>
  )
}

export default Epub