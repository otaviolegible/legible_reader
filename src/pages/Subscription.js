import React from 'react'
import { SubscriptionInactive, SubscriptionActive } from '../components';

// TODO: this should be a user obect from user state in legible-context-provider
const user = {
  subscription: {
    id: 'sub_HB46BAfevvz24v',
    created: 1588206807993,
    current_period_end: 9988206807993,
    current_period_start: 1588206807993,
  }
}

const Subscription = () => {
  const { subscription } = user

  if(subscription.current_period_end > Date.now()) {
    return <SubscriptionActive subscription={subscription} />
  }

  return <SubscriptionInactive />
}

export default Subscription