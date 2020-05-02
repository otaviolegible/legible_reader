import React from 'react'

import { Header } from '../components';

const SubscriptionActive = ({ subscription }) => {
  return (
    <>
      <Header />
      <p>Your subscription ends at {subscription.current_period_end}</p>
      <button></button>
    </>
  )
}

export default SubscriptionActive