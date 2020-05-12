import React from 'react'
import { FormattedMessage, FormattedDate } from 'react-intl';

import { Header } from '../components';

const SubscriptionActive = ({ subscription }) => {
  const cancelSubscription = () => console.log('cancel')

  return (
    <>
      <Header />
      <h2>
          <FormattedMessage
            id='expiration' 
            values={{
              total: <FormattedDate value={new Date(subscription.current_period_start)} /> 
            }} 
          />  
      </h2>
      <hr />
      <button onClick={cancelSubscription}>Cancel subscription</button>
    </>
  )
}

export default SubscriptionActive