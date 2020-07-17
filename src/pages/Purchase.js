import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useUserState} from '@legible/context-provider'

import {fetchBook} from '../services'
import { Header } from '../components'

import CardHandler from '../components/CardHandler'
import BookPurchase from '../components/BookPurchase'

const Purchase = () => {
  const [book, setBook] = useState({ id: null, pricing: { list: null, sale: null, taxes: { details: [] }  } })
  const [isLoading, setIsLoading] = useState(false)
  const {isLoading: userIsLoading} = useUserState();
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

  if(isLoading || userIsLoading) return <p>Loading...</p>

  return (
    <>    
      <Header />
      <div>
        <h2>Secure checkout</h2>
        <CardHandler book={book} />
      </div>
      <div>
        <BookPurchase book={book} />
      </div>
    </>
  )
}

export default Purchase