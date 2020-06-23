import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useUserState, useAuthState, useUserDispatch } from '@legible/context-provider';
import { CreditCard as CreditCardStyles } from '@legible/ui-components'
import {fetchBook} from '../services'

const CheckoutForm = () => {
  const {purchaseBook} = useUserDispatch()
  const {isLoading: isLoadingUser, subscription} = useUserState();
  const {session} = useAuthState();
  const stripe = useStripe();
  const elements = useElements();
  const {id} = useParams()
  const {jwtToken} = session

  const [ book, setBook ] = useState({id: null})
  const [ isLoading, setIsLoading ] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!stripe || !elements) return
    await purchaseBook(jwtToken, 7000, 'cad', subscription.id, id)
  };

  return (
    <form>
      <h4>CC info</h4>
      <CardElement options={CreditCardStyles} />
      <button disabled={!stripe || isLoadingUser} onClick={handleSubmit}>buy</button>
    </form>
  );
}

export default CheckoutForm