import React from 'react'
import { Container } from '@legible/ui-components'

import { Header, Footer, SearchBar, BookDetails } from '../components'

const Book = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <SearchBar />
        <BookDetails />
      </Container>
      <Footer />
    </>
  )
}

export default Book