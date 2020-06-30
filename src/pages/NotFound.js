import React from 'react'
import { Container, P } from '@legible/ui-components'

import { Footer, Header } from '../components'

const NotFound = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <P>404 Not Found</P>
      </Container>
      <Footer />
    </>
  )
}

export default NotFound