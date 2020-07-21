import React from 'react'
import { Container, H1, LogoLibraryMain as Logo } from '@legible/ui-components'

import { Footer, Header, LatestBooks } from '../components'

const MyLibrary = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <H1 className='mb-10'><Logo /></H1>
        {/* TO DO: Add myLibrary books */}
        <LatestBooks />
      </Container>
      <Footer />
    </>
  )
}

export default MyLibrary