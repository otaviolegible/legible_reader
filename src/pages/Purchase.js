import React, { useEffect, useState } from 'react'
import {useParams, history} from 'react-router-dom'
import {useUserState, useUserDispatch, useAuthState} from '@legible/context-provider'

import BookPurchase from '../components/BookPurchase'
import {fetchBook} from '../services'

const CardAvailable = ({ book }) => {
  const {customer} = useUserState();

  console.log(customer)

  return <BookPurchase book={book} />
}

const Purchase = () => {
  const [book, setBook] = useState({ id: null })
  const [isLoading, setIsLoading] = useState(false)
  const {isLoading: userIsLoading, email, customer, subscription, purchases} = useUserState();
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

  useEffect(() => {
    if(!customer && subscription.id && !userIsLoading) getCustomer(jwtToken, subscription.id)
  }, [subscription])

  if(isLoading || userIsLoading) return null

  return (
    <>
      <div>
        <h2>Secure checkout</h2>
        <CardAvailable book={book} />
      </div>
      <div>
        <h2>You're purchasing the ebook: {book.title}</h2>
      </div>
    </>
  )
}

export default Purchase