import React from 'react'
import { IntlProvider } from 'react-intl'
import { SubscriptionInactive, SubscriptionActive } from '../components';
import { subscription as translation } from '../intl'

// TODO: this should be a user obect from user state in legible-context-provider
const user = {
  subscription: {
    id: 'sub_HB46BAfevvz24v',
    created: 1588206807993,
    current_period_end: 9988206807993,
    current_period_start: 1588206807993,
  }
}

const SubscriptionContent = () => {
  const { subscription } = user

  if(subscription.current_period_end > Date.now()) {
    return <SubscriptionActive subscription={subscription} />
  }

  return <SubscriptionInactive />
}

const Subscription = () => (
  <IntlProvider locale={navigator.language} messages={translation}>
    <SubscriptionContent />
  </IntlProvider>
)

export default Subscription