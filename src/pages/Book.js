import React from 'react'
import { Container } from '@legible/ui-components'

import { Header, Footer, BookBreadcrumbNav, BookDetails, BookReviews } from '../components'

const Book = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <BookBreadcrumbNav />
        <BookDetails />
        <BookReviews />
      </Container>
      <Footer />
    </>
  )
}

export default Book