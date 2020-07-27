import React from 'react'
import { IntlProvider } from 'react-intl'
import { Container, GridContainer, GridItem } from '@legible/ui-components'
import { Footer, Header } from '../components'

import { subscription } from '../intl'

const Profile = () => {
  return (
    <IntlProvider locale="en" messages={subscription}>
      <Header />
      <Container margin='7rem auto 12rem'>
        <GridContainer>
          <GridItem column='3 / 9'>
            <p>Profile</p>
          </GridItem>
        </GridContainer>
      </Container>
      <Footer />
    </IntlProvider>
  )
}
export default Profile
