import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import { useUserState } from '@legible/context-provider'

import CardCreator from './CardCreator'
import CreditCardInfo from './CreditCardInfo'

const CardHandler = () => {
  const [ newCard, setNewCard ] = useState(false)
  const { customer } = useUserState()
  const stripePromise = loadStripe(process.env.STRIPE_API_KEY);

  const toggleCardCreation = () => setNewCard(!newCard)

  if(customer.creditCards.length === 0) {
    return (
      <Elements stripe={stripePromise}>
        <CardCreator />
      </Elements>
    )
  }

  return (
    <Elements stripe={stripePromise}>
      <ul>
        {customer.creditCards.map((card, i) => <CreditCardInfo key={i} card={card} />)}
      </ul>
      <div hidden={!newCard}>
        <CardCreator />
      </div>
      <button onClick={toggleCardCreation}>Add card</button>
    </Elements>
  )
}

export default CardHandler