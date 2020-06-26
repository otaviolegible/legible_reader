import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {useUserState} from '@legible/context-provider'

import {fetchBook} from '../services'
import { Reader, SubscriptionInactive } from '../components'

const Read = () => {
  const [book, setBook] = useState({ id: null, monetization: {} })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)
  const {subscription, purchases, isLoading: userLoading} = useUserState()
  const {id, language} = useParams()

  const handleBook = async () => {
    setIsLoading(true)
    const book = await fetchBook({ id, language })
    setBook(book)
    setIsSubscribed(!!subscription.id)
    setIsPurchased(!!purchases.find(purchase => purchase === book.id))
    setIsLoading(false)
  }

  useEffect(() => {
    if(!book.id && !isLoading) handleBook()
    return () => setBook()
  }, [])

  if(isLoading && userLoading) return null

  if(book.monetization.purchase && !isPurchased || book.monetization.subscription && !isSubscribed) return (
    <>
      <h2>Subscribe maybe?</h2>
      <SubscriptionInactive />
    </> 
  )

  return <Reader />
}

export default Read