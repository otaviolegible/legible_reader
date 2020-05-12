import React from 'react'
import { Container } from 'legible-ui-components'

import { Header, SearchBar, StaffBooks } from '../components'

import { home } from '../intl'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <StaffBooks staffpick={home.staffpicks} />
      </Container>
    </>
  )
}

export default Home