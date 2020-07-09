import React from 'react'
import { Button, Container, FlexBox, H3, P } from '@legible/ui-components'

const BookReviews = () => (
  <Container className='mt-6' borderTop>
    <FlexBox flow='column' align='center'>
      <H3 className='mt-6 mb-3'>Reviews</H3>
      <article>
        <P>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis odio ac eros hendrerit consequat. Sed quis fermentum leo. In consequat eleifend viverra. Cras ligula nisl, aliquam volutpat ligula fringilla, efficitur maximus purus. Nullam venenatis consequat orci varius posuere. Fusce iaculis mauris vitae efficitur elementum.”</P>
        <P className='mt-2 mb-5'><strong>— Author, From reputable source</strong></P>
      </article>
      <article>
        <P>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis odio ac eros hendrerit consequat. Sed quis fermentum leo. In consequat eleifend viverra. Cras ligula nisl, aliquam volutpat ligula fringilla, efficitur maximus purus. Nullam venenatis consequat orci varius posuere. Fusce iaculis mauris vitae efficitur elementum.”</P>
        <P className='mt-2 mb-5'><strong>— Author, From reputable source</strong></P>
      </article>
      <Button className='mt-9' as='a' type='critical' appearance='outline' href='mailto:abuse@legible.com'>Report this title</Button>
    </FlexBox>
  </Container>
)

export default BookReviews