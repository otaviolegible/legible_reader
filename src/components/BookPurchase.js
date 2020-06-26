import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useUserState, useAuthState, useUserDispatch } from '@legible/context-provider';
import { CreditCard as CreditCardStyles } from '@legible/ui-components'
import {fetchBook} from '../services'
const stripePromise = loadStripe(process.env.STRIPE_API_KEY);

const CheckoutForm = ({ book }) => {
  const {purchaseBook} = useUserDispatch()
  const {isLoading: isLoadingUser, subscription} = useUserState();
  const {session} = useAuthState();
  const stripe = useStripe();
  const elements = useElements();
  const {jwtToken} = session

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!stripe || !elements) return
    await purchaseBook(jwtToken, 7000, 'cad', subscription.id, book.id)
  };

  return (
    <form>
      <h4>CC info</h4>
      <CardElement options={CreditCardStyles} />
      <button disabled={!stripe || isLoadingUser} onClick={handleSubmit}>buy</button>
    </form>
  );
}

const BookPurchase = ({ book: initialBook = {id: null} }) => {
  const [ book, setBook ] = useState(initialBook)
  const [ isLoading, setIsLoading ] = useState(false)
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

  if(!book && !isLoading) return <p>No book :(</p>

  if(isLoading) return null

  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm book={book} />
      </Elements>
    </>
  )
}

export default BookPurchase
