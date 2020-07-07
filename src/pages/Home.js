import React from 'react'
import { Container, FlexBox } from '@legible/ui-components'

import { Footer, Header, SearchBar, LatestBooks } from '../components'

const Home = () => {
  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        <FlexBox className='mb-5' justify='flex-end'>
          <SearchBar placeholder='Search for books' />
        </FlexBox>
        <LatestBooks />
      </Container>
      <Footer />
    </>
  )
}

export default Home