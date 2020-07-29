import React, { useEffect, useState } from 'react'
import { Book, Rendition } from '@legible/epubjs'
import { Button } from '@legible/ui-components';
// import InlineView from '@legible/epubjs/lib/managers/views/inline'

const Epub = ({
  url,
  location = 0,
  progress: initialProgress = { percentage: 0, page: 1, location: '' },
  locationChanged = () => {},
  progressUpdate = () => {},
  settings: initialSettings = {
    encoding: 'base64',
    replacements: 'base64'
  },
  options: initialOptions = {
    method: 'continuous',
    width: '90%',
    height: '100%',
    // view: InlineView
  },
  options: mobileOptions = {
    ...initialOptions,
    flow: 'scrolled-doc'
  }
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [nav, setNav] = useState(location)
  const [book, setBook] = useState()
  const [rendition, setRendition] = useState()
  const [progress, setProgress] = useState(initialProgress.percentage)
  const [page, setPage] = useState(initialProgress.page)

  const handleBook = async () => {
    setIsLoading(true)
    const book = new Book(url, initialSettings)
    await book.ready
    book.locations.generate(1024)
    setBook(book)
    setIsLoading(false)
  }

  const handleRendition = () => {
    const res = new Rendition(book, initialOptions)
    const resMobile = new Rendition(book, mobileOptions)

    if (window.innerWidth > 887) {
      setRendition(res)
    } else {
      // change flow to scroll > 887
      setRendition(resMobile)
    }
  }

  const setCurrentProgress = locations => {
    const location = locations.start.cfi
    const progress = book.locations.percentageFromCfi(location)
    const page = book.locations.locationFromCfi(location)
    setProgress(progress)
    setPage(page)
    progressUpdate({location: locations.end.cfi, progress, page})
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
    rendition.on('relocated', setCurrentProgress)
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
  }, [])

  useEffect(() => {
    if(book) handleRendition()
  }, [book])

  useEffect(() => {
    if(rendition) initRender()
  }, [rendition])

  if(!rendition) return <Spinner overlay />

  return (
    <>
      <nav>
        <Button className='prev' onClick={handlePrev} type='icon' icon='arrowprev' aria-label='Previous Page' />
        <Button className='next' onClick={handleNext} type='icon' icon='arrownext' aria-label='Next Page' />
      </nav>
      <div id="book-area" />
    </>
  )
}

export default Epub