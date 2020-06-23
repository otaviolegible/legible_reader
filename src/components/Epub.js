import React, { useEffect, useState } from 'react'
import { Book, Rendition } from 'epubjs'
// import InlineView from 'epubjs/lib/managers/views/inline'

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
  const [isLoading, setIsLoading] = useState(true)
  const [nav, setNav] = useState(location)
  const [book, setBook] = useState()
  const [rendition, setRendition] = useState()

  const handleBook = async () => {
    setIsLoading(true)
    const book = new Book(url, initialSettings)
    await book.loading.navigation
    setBook(book)
    setIsLoading(false)
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

  const initRender = () => {
    rendition.attachTo('book-area')
    rendition.display(nav)
    rendition.on('locationChanged', changeLocation)
    rendition.on('keyup', handleKeyPress)
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
    if(!book || !isLoading) handleBook()
    return () => setBook()
  }, [])

  useEffect(() => {
    if(book) handleRendition()
    return () => setBook()
  }, [book])

  useEffect(() => {
    if(rendition) initRender()
    return () => setBook()
  }, [rendition])

  if(!rendition) return <p>loading</p>

  return (
    <>
      <nav>
        <button className='prev' onClick={handlePrev}>&lang;</button>
        <button className='next' onClick={handleNext}>&rang;</button>
      </nav>
      <div id="book-area" />
    </>
  )
}

export default Epub