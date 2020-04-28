import React, {useState} from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import { stripePaymentMethodHandler } from '../services'
import { useUserState } from '../contexts/UserProvider';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const handleSubmit = async (event, email, stripe, elements) => {
  event.preventDefault();

  if (!stripe || !elements) return

  const result = await stripe.createPaymentMethod({
    type: 'card',
    card: elements.getElement(CardElement),
    billing_details: {
      email,
    },
  });

  stripePaymentMethodHandler(result, email);
};

const CheckoutForm = () => {
  const [ email, setEmail ] = useState('');
  const { user } = useUserState();
  const stripe = useStripe();
  const elements = useElements();

  console.log(user)

  return (
    <form>
      <span>email</span>
      <input type="text" onChange={e => setEmail(e.target.value)} />
      <hr />
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button type="submit" disabled={!stripe} onClick={e => handleSubmit(e, email, stripe, elements)}>
        Subscribe
      </button>
    </form>
  );
}

export default CheckoutForm