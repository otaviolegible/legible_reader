import React from 'react'
import { useParams } from 'react-router-dom'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { CreditCard as CreditCardStyles, Button } from '@legible/ui-components'
import { useAuthState, useUserState, useUserDispatch } from '@legible/context-provider';

const CardCreator = () => {
  const { isLoading, customer: initialCustomer, email } = useUserState()
  const { createCustomer, setDefaultCard, attachCardToCustomer } = useUserDispatch()
  const { id } = useParams()
  const elements = useElements()
  const stripe = useStripe()
  const { session } =  useAuthState()
  const { jwtToken } = session

  const handleDefaultCard = async (paymentMethod) => await setDefaultCard(jwtToken, paymentMethod.id)

  const handleCustomer = async () => initialCustomer.id || await createCustomer(jwtToken, email)

  const handleCCCreation = async () => {
    if(!stripe || !elements) return

    const card = elements.getElement(CardElement)
    const { paymentMethod } = await stripe.createPaymentMethod({type: 'card', card})

    return paymentMethod
  }

  const handleSubmit = async () => {    
    const paymentMethod = await handleCCCreation()
    await handleCustomer()
    const card = await attachCardToCustomer(jwtToken, paymentMethod)
    
    await handleDefaultCard(paymentMethod)

    return card
  };

  return (
    <>
      <h4>CC info</h4>
      <CardElement options={CreditCardStyles} />
      <Button disabled={isLoading} onClick={handleSubmit}>save card</Button>
    </>
  )
}

export default CardCreator