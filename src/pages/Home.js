import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, FlexBox, GridContainer, Hero as HeroWrapper, H1, H2, H3, Icon, P } from '@legible/ui-components'

import { Footer, Header, LatestBooks } from '../components'

const Hero = () => (
  <HeroWrapper articleSmall background='https://legible.blob.core.windows.net/static/publisher-web-client/img/legible-reader-hero.svg'>
    <Container className='hero__container'>
      <article>
        <H1 size='large'>Books<br/>unbound.</H1>
        <P className='mt-5 mb-6' textLarge>Read your favourite books from any browser. Anywhere. Anytime.</P>
        <Button as={NavLink} to='/sign-up'>Try it for free</Button>
      </article>
    </Container>
  </HeroWrapper>
)

const Feature = ({ icon, text, title  }) => (
  <Container as='article' fullWidth backgroundColorWhite borderRadius>
    <FlexBox className='pt-7 pr-6 pb-9 pl-7' flow='column' align='center'>
      <Icon icon={icon} type='readerLandingPage' aria-hidden />
      <H3 className='mt-6 mb-3'>{title}</H3>
      <P center><strong>{text}</strong></P>
    </FlexBox>
  </Container>
)

const Features = () => (
  <Container as='section' fullWidth backgroundColorLight>
    <Container className='pt-12 pb-14'>
      <H2 className='mb-9 text-center'>Why Legible</H2>
      <GridContainer className='mb-12' columns='repeat(auto-fit, minmax(28rem, 1fr))' gap='2.4rem'>
        <Feature
          icon='booklove'
          title='Books you`ll love'
          text='Search the latest releases, best sellers and your favourite titles in our online library'
        />
        <Feature
          icon='unlimitedreading'
          title='Unlimited Reading'
          text='Enjoy unlimited access to all our books with any of our account options'
        />
        <Feature
          icon='nospecialdevices'
          title='No Special Devices'
          text='Read anywhere, anytime, on any browser — from your phone, tablet, or computer'
        />
      </GridContainer>
      <FlexBox flow='column' align='center'>
        <Button as={NavLink} to='/sign-up'>Try it for free</Button>
        <P className='mt-4'>No credit card needed.</P>
      </FlexBox>
    </Container>
  </Container>
)

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container margin='10rem auto 12rem'>
        <H2 className='mb-9 text-center'>Recommended Books</H2>
        <LatestBooks />
      </Container>
      <Features />
      <Footer />
    </>
  )
}

export default Home