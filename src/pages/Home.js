import React from 'react'
import { IntlProvider } from 'react-intl'
import { Container } from 'legible-ui-components'

import { Header, SearchBar, StaffBooks } from '../components'

import { home } from '../intl'

const Home = () => {
  return (
    <IntlProvider locale={navigator.language} messages={home}>
      <Header />
      <Container>
        <SearchBar />
        <StaffBooks staffpick={home.staffpicks} />
      </Container>
    </IntlProvider>
  )
}

export default Home