import React, { useEffect } from 'react'
import {useUserState, useAuthDispatch} from '@legible/context-provider'
import BookPurchase from '../components/BookPurchase'
import { useUserDispatch } from 'legible-context-provider/dist/contexts/user';
import { useAuthState } from 'legible-context-provider/dist/contexts/auth';

const Purchase = () => {
  const {isLoading, email, customer, subscription} = useUserState();
  const {getCustomer} = useUserDispatch()
  const {session} = useAuthState()
  const {jwtToken} = session

  useEffect(() => {
    if(!customer && subscription.id && !isLoading) getCustomer(jwtToken, subscription.id)
  }, [subscription])

  if(isLoading) return null

  if(customer) return <p>{email}</p>

  return (
    <div>
      <BookPurchase />
    </div>
  )
}

export default Purchase