import React from 'react'
import { Container } from '@legible/ui-components'

import { Footer, Header, SearchBar, LatestBooks } from '../components'

const Home = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <SearchBar />
        <LatestBooks />
      </Container>
      <Footer />
    </>
  )
}

export default Home