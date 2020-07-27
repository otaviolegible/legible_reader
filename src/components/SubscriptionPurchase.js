import React from 'react'
import { useAuthState, useUserState, useUserDispatch } from '@legible/context-provider'
import CardHandler from './CardHandler'

export const SubscriptionPurchase = () => {
  const { customer, isLoading } = useUserState()
  const { createSubscription } = useUserDispatch()
  const { session } = useAuthState()
  const { jwtToken } = session

  const handleSubscription = () => createSubscription(jwtToken)

  if(isLoading) {
    return <p>Loading</p>
  }

  if(customer && customer.subscription && customer.subscription.id) {
    return <p>Cancel subscription</p>
  }

  return (
    <div>
      <CardHandler />
      <h3>Hello! Subscribe please</h3>
      <button onClick={handleSubscription}>Subscribe button</button>
    </div>
  )
}

export default SubscriptionPurchase