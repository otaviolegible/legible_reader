import React from 'react'
import { loadStripe, Elements } from '@stripe/react-stripe-js';

import { Header, CheckoutForm } from '../components';

const SubscriptionInactive = () => {
  const stripePromise = loadStripe(process.env.STRIPE_API_KEY);

  return (
    <>
    <Header />
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  )
}

export default SubscriptionInactive