import React from 'react'
import { Container } from '@legible/ui-components'

import { Footer, Header, SubscriptionPurchase } from '../components'

export const Premium = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <SubscriptionPurchase />
      </Container>
      <Footer />
    </>
  )
}

export default Premium