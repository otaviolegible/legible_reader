import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useUserState, useAuthState, useUserDispatch } from '@legible/context-provider';
import { CreditCard as CreditCardStyles, Button } from '@legible/ui-components'
import {fetchBook} from '../services'

const stripePromise = loadStripe(process.env.STRIPE_API_KEY);

const CheckoutForm = ({ book }) => {
  const {purchaseBook, createCustomer} = useUserDispatch()
  const {isLoading: isLoadingUser, email, customer: userCustomer} = useUserState();
  const {session} = useAuthState();
  const stripe = useStripe();
  const elements = useElements();
  const {jwtToken} = session

  const handleSubmit = async e => {
    e.preventDefault()

    const type = 'card'
    const billing_details = { email }
    const card = elements.getElement(CardElement)
    const price = { amount: 8000, currency: 'cad' }

    if(!stripe || !elements) return

    const {paymentMethod} = await stripe.createPaymentMethod({ type, card, billing_details })
    const customer = userCustomer || await createCustomer(jwtToken, email, paymentMethod)

    const buyer = { id: customer.id, book: book.id }

    await purchaseBook(jwtToken, price, buyer)
  };

  return (
    <form>
      <h4>CC info</h4>
      <CardElement options={CreditCardStyles} />
      <Button disabled={!stripe || isLoadingUser} onClick={handleSubmit}>buy</Button>
    </form>
  );
}

const BookPurchase = ({ book: initialBook = {id: null} }) => {
  const [book, setBook] = useState(initialBook)
  const [isLoading, setIsLoading] = useState(false)
  const {customer, getCustomer} = useUserState();
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

  // if(customer) {
  //   return <p>I exist already! handle cards display</p>
  // }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm book={book} />
    </Elements>
  )
}

export default BookPurchase
