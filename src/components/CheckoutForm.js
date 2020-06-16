import React, {useState} from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useUserState, useAuthState, useUserDispatch } from '@legible/context-provider';
import { CreditCard as CreditCardStyles } from '@legible/ui-components'

const CheckoutForm = () => {
  const {session} = useAuthState();
  const {isLoading, user} = useUserState();
  const {createSubscription} = useUserDispatch()
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    const type = 'card'
    const card = elements.getElement(CardElement)
    const billing_details = { email: user.email }

    e.preventDefault()

    if(!stripe || !elements) return

    const {paymentMethod} = await stripe.createPaymentMethod({ type, card, billing_details});
  
    createSubscription(session.jwtToken, user.email, paymentMethod)
  };

  return (
    <form>
      <h4>CC info</h4>
      <CardElement options={CreditCardStyles} />
      <button disabled={!stripe || isLoading} onClick={handleSubmit}>Subscribe</button>
    </form>
  );
}

export default CheckoutForm