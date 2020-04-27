import React from 'react'
import { Container } from 'legible-ui-components'

import { Header, SearchBar, BookDetails } from '../components'

const Book = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <BookDetails />
    </Container>
  )
}

export default Book