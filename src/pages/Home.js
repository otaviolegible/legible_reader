import React from 'react'
import { IntlProvider } from 'react-intl'
import { Container } from 'legible-ui-components'

import { SearchBar, StaffBooks } from '../components'

import { home } from '../intl'

const Home = () => {
  return (
    <IntlProvider locale="en" messages={home}>
      <Container>
        <SearchBar />
        <StaffBooks />
      </Container>
    </IntlProvider>
  )
}

export default Home