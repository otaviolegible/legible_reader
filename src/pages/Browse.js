import React from 'react'
import { Container, H1 } from '@legible/ui-components'

import { Footer, Header, LatestBooks } from '../components'

const Browse = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <H1 className='mb-10'>Browse</H1>
        {/* TO DO: Add filter for display */}
        <LatestBooks />
        {/* TO DO: Add Pagination */}
      </Container>
      <Footer />
    </>
  )
}

export default Browse