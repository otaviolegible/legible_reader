import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useUserState, useUserDispatch, useAuthState} from '@legible/context-provider'

import {fetchBook} from '../services'
import { Header } from '../components'
import BookPurchase from '../components/BookPurchase'

const Purchase = () => {
  const [book, setBook] = useState({ id: null })
  const [isLoading, setIsLoading] = useState(false)
  const {isLoading: userIsLoading} = useUserState();
  const {getCustomer} = useUserDispatch()
  const {session} = useAuthState()
  const {jwtToken} = session
  const {id} = useParams()

  const handleBook = async () => {
    setIsLoading(true)
    const book = await fetchBook({ id })
    setBook(book)
    setIsLoading(false)
  }
  
  useEffect(() => {
    if(!book.id && !isLoading) handleBook()
  }, [])

  if(isLoading || userIsLoading) return null

  return (
    <>    
      <Header />
      <div>
        <h2>Secure checkout</h2>
        <BookPurchase book={book} />
      </div>
      <div>
        <h2>You're purchasing the ebook: {book.title}</h2>
      </div>
    </>
  )
}

export default Purchase