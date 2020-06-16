import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import { Header, CheckoutForm } from '../components';

const stripePromise = loadStripe(process.env.STRIPE_API_KEY);

const SubscriptionInactive = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  )
}

export default SubscriptionInactive