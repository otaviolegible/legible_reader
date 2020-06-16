import React from 'react'
import {useUserState} from '@legible/context-provider'
import {FormattedMessage, FormattedDate} from 'react-intl';

const SubscriptionActive = () => {
  const {user} = useUserState()
  const cancelSubscription = () => console.log('cancel')
  const {subscription} = user

  return (
    <>
      <h2>
          <FormattedMessage id='expiration' values={{total: <FormattedDate value={new Date(subscription.current_period_end)} />}} />  
      </h2>
      <hr />
      <button onClick={cancelSubscription}>Cancel subscription</button>
    </>
  )
}

export default SubscriptionActive