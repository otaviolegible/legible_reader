import React from 'react'
import { IntlProvider } from 'react-intl'
import { Container, GridContainer, GridItem } from '@legible/ui-components'
import { Header } from '../components'
import SubscriptionModal from '../components/SubscriptionModal'

import { subscription } from '../intl'

const Profile = () => {
  return (
    <IntlProvider locale="en" messages={subscription}>
      <Container>
        <Header />
        <GridContainer>
          <GridItem column='3 / 9'>
            <SubscriptionModal />
          </GridItem>
        </GridContainer>
      </Container>
    </IntlProvider>
  )
}
export default Profile
