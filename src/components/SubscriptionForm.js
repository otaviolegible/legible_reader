import React, {useState} from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useUserState, useAuthState, useUserDispatch } from '@legible/context-provider';
import { CreditCard as CreditCardStyles } from '@legible/ui-components'

const SubscriptionForm = () => {
  const {session} = useAuthState();
  const {isLoading, email, customer} = useUserState();
  const {createSubscription, createCustomer} = useUserDispatch()
  const stripe = useStripe();
  const elements = useElements();
  const {jwtToken} = session

  const handleSubmit = async (e) => {
    const type = 'card'
    const card = elements.getElement(CardElement)
    const billing_details = { email }

    e.preventDefault()

    if(!stripe || !elements) return

    const {paymentMethod} = await stripe.createPaymentMethod({ type, card, billing_details});
  
    if(!customer.id) await createCustomer(email, jwtToken)
    createSubscription(jwtToken, email, paymentMethod)
  };

  return (
    <form>
      <h4>CC info</h4>
      <CardElement options={CreditCardStyles} />
      <button disabled={!stripe || isLoading} onClick={handleSubmit}>Subscribe</button>
    </form>
  );
}

export default SubscriptionForm