import React from 'react'
import { Link } from 'react-router-dom'
import { useUserState } from '@legible/context-provider'
import { Button, Container, GridContainer, H1, H2, H3, P } from '@legible/ui-components'

const GetPremium = () => (
  <Container className='pt-5 pr-5 pb-5 pl-5' backgroundColor borderRadius margin='0' maxWidth='33.5rem'>
    <P color='inherit'><strong>Get Premium Account</strong></P>
    <P className='mt-2 mb-4' color='inherit'>Legible Premium: $9.99/month<br/>Unlimited reading. No ads.</P>
    <Button type='secondary' size='small' as={Link} to='/premium'>Get Premium</Button>
  </Container>
)

const BuyNow = ({ pricing: {list = '', sale = ''}, id = '' }) => {
  if(sale) {
    return (
      <Container className='pt-5 pr-5 pb-5 pl-5' border borderRadius margin='0' maxWidth='33.5rem'>
        <P><strong>Buy The Ebook</strong></P>
        <P className='mt-2 mb-4'><del>$ {list}</del></P>
        <P color='#da3510' className='mt-2 mb-4'>Sale Price: $ {sale}</P>
        <Button type='secondary' appearance='outline' size='small' as={Link} to={`/purchase/${id}`}>Buy now</Button>
      </Container>
    )
  }

  return (
    <Container className='pt-5 pr-5 pb-5 pl-5' border borderRadius margin='0' maxWidth='33.5rem'>
      <P><strong>Buy The Ebook</strong></P>
      <P className='mt-2 mb-4'>$ {list}</P>
      <Button type='secondary' appearance='outline' size='small' as={Link} to={`/purchase/${id}`}>Buy now</Button>
    </Container>
  )
}

const PurchaseSubscribe = ({ book }) => {
  const {username} = useUserState()
  const {monetization = {}, id, pricing} = book
  const {ads = false, subscription = false, purchase = false} = monetization

  if(!username && (purchase || subscription)) {
    return <Link to={`/sign-in?ref=/book/${id}`}>Purchase: {pricing.list}</Link>
  }

  if(username && purchase && !ads && !subscription) {
    return (
      <Container className='mt-5 pt-5 pb-5' fullWidth borderTop borderBottom>
        <P className='mb-5'><strong>This ebook is available by Purchase.</strong></P>
        <BuyNow pricing={pricing} id={id} />
      </Container>
    )
  }

  if(purchase && subscription) {
    return (
      <Container className='mt-5 pt-5 pb-5' fullWidth borderTop borderBottom>
        <P className='mb-5'><strong>This ebook is available through Legible Premium or by Purchase.</strong></P>
        <GridContainer columns='repeat(auto-fit, minmax(28.5rem, 1fr))' gap='2.4rem'>
          <GetPremium />
          <BuyNow pricing={pricing} id={id} />
        </GridContainer>
      </Container>
    )
  }

  return null
}

export default PurchaseSubscribe