import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from '@legible/ui-components'
import { fetchBook } from '../services'

const BookBreadcrumbNav = ({ book: initialBook = { id: null } }) => {
  const [ book, setBook ] = useState(initialBook)
  const [ isLoading, setIsLoading ] = useState(false)
  const { id } = useParams()

  const handleBook = async () => {
    setIsLoading(true)
    const book = await fetchBook({ id })
    setBook(book)
    setIsLoading(false)
  }
  
  useEffect(() => {
    if(!book.id && !isLoading) handleBook()
  }, [book])

  if(!book && !isLoading) return <p>No book :(</p>

  if(isLoading) return null

  return (
    <nav className='mb-5'>
      <Breadcrumb>
        <BreadcrumbItem href='/browse'>Browse</BreadcrumbItem>
        <BreadcrumbItem isSelected>{book.title}</BreadcrumbItem>
      </Breadcrumb>
    </nav>
  )
}

export default BookBreadcrumbNav