import React from 'react'
import { Container } from 'legible-ui-components'

import { Header, SearchBar, LatestBooks } from '../components'

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <SearchBar />
        <LatestBooks />
      </Container>
    </>
  )
}

export default Home