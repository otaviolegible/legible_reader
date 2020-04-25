import React from 'react'
import { Container } from 'legible-ui-components'

import { SearchBar, BookDetails } from '../components'

const Book = () => {
  return (
    <Container>
      <SearchBar />
      <BookDetails />
    </Container>
  )
}

export default Book