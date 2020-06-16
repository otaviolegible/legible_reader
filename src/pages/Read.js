import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {useUserState} from '@legible/context-provider'
import { Reader, SubscriptionInactive } from '../components'

const Read = () => {
  const {subscription, isLoading} = useUserState()
  const history = useHistory()

  if(isLoading) return null

  if(!subscription.id) return (
    <>
      <h2>Subscribe maybe?</h2>
      <SubscriptionInactive />
    </>
  )

  return (
    <Reader />
  )
}

export default Read