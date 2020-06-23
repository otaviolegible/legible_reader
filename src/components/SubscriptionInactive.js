import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import { Header, SubscriptionForm } from '../components';

const stripePromise = loadStripe(process.env.STRIPE_API_KEY);

const SubscriptionInactive = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <SubscriptionForm />
      </Elements>
    </>
  )
}

export default SubscriptionInactive