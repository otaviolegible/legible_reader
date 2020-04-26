import React from 'react'
import { IntlProvider } from 'react-intl'
import { Container } from 'legible-ui-components'

import { Header, SearchBar, StaffBooks } from '../components'

import { home } from '../intl'

const Home = () => {
  return (
    <IntlProvider locale="en" messages={home}>
      <Header />
      <Container>
        <SearchBar />
        <StaffBooks />
      </Container>
    </IntlProvider>
  )
}

export default Home