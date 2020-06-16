import React, { useEffect, useState } from 'react'
import { useUserState } from 'legible-context-provider'
import SubscriptionActive from './SubscriptionActive'
import SubscriptionInactive from './SubscriptionInactive'

export const SubscriptionModal = ({isActive: initialActive = false}) => {
  const [isActive, setIsActive] = useState(initialActive)
  const {user} = useUserState()

  useEffect(() => {
    if(user.subscription && user.subscription.id) setIsActive(true)
    return () => setIsActive(false)
  }, [user])

  if(isActive) return <SubscriptionActive />

  return (
    <>
      <h2>Subscribe to have access to loads of books</h2>
      <p>Subscribe now!</p>
      <SubscriptionInactive />
    </>
  )
}

export default SubscriptionModal
