import React, { useEffect, useState } from 'react'
import { Book } from 'epubjs';

const Epub = ({
  url,
  location,
  locationChanged,
  settings: initialSettings = {
    encoding: 'base64',
    replacements: 'base64'
  },
  options: initialOptions = {
    method: 'continuous',
    width: '100%',
    height: '100%'
  }
}) => {
  const [book, setBook] = useState(new Book(url, initialSettings))
  const [rendition, setRendition] = useState()

  const handleBook = async () => {
    await book.ready
    const res = book.renderTo('book-area', initialOptions)
    setRendition(res)
  }

  useEffect(() => {
    if(!url && !book.ready.length > 0) return null
    handleBook()
  }, [url, book])

  useEffect(() => {
    if(!rendition) return
    rendition.display()
  }, [rendition])

  if(!rendition) return <p>loading</p>

  return (
    <>
      <button onClick={() => rendition.prev()}>prev</button>
      <button onClick={() => rendition.next()}>next</button>
      <div id="book-area" style={{ width: '100%', height: '100%' }} />
    </>
  )
}

export default Epub