import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe}  from '@stripe/stripe-js';

import { Header, CheckoutForm } from '../components';

const stripePromise = loadStripe(process.env.STRIPE_API_KEY);

const Subscription = () => (
  <>
    <Header />
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </>
)

export default Subscription