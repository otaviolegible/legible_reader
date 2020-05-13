import React, { useEffect, useState } from 'react'
import { Book, Rendition } from 'epubjs'
import InlineView from 'epubjs/lib/managers/views/inline'

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
    view: InlineView
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

  const handlePrev = async () => {
    const asd = await rendition.prev()
    console.log(asd)
    locationChanged({ nav: nav - 1, book })
    handleRendition()
  }

  const handleNext = () => {
    console.log(rendition)
    rendition.next()
  }

  useEffect(() => {
    if(fetching.isLoading || fetching.isReady) return
    handleBook()
  }, [fetching.isLoading, fetching.isReady])

  useEffect(() => {
    if(!fetching.isReady) return
    handleRendition()
  }, [fetching.isReady])

  useEffect(() => {
    if(!rendition) return
    rendition.attachTo('book-area')
    rendition.display(nav)
    return () => rendition = null
  }, [rendition])

  if(!rendition) return <p>loading</p>

  return (
    <>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      <div id="book-area" style={{ width: '100%', height: '100%' }} />
    </>
  )
}

export default Epub