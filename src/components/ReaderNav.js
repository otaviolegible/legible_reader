import React from 'react'
import { Link } from 'react-router-dom'
import { Container, FlexBox, Icon } from '@legible/ui-components';

const Reader = ({
  bookId,
  fullscreen = () => {},
  isFullscreen,
}) => {
  return (
    <Container className='pt-5 pr-5 pb-4 pl-5' as='header'>
      <FlexBox>
        <FlexBox>
          <Link to={`/book/${bookId}`}>
            <Icon className='mr-5' icon='arrowreturn' type='reader' aria-label='Back to book' />
          </Link>
          <Link to='/my-library'>
            <Icon className='mr-5' icon='library' type='reader' aria-label='Back to library' />
          </Link>
        </FlexBox>
        <FlexBox justify='flex-end'>
          <button onClick={fullscreen}>
            <Icon
              className='ml-5'
              icon={isFullscreen ? 'fullscreenexit' : 'fullscreen'}
              type='reader'
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            />
          </button>
        </FlexBox>
      </FlexBox>
    </Container>
  )
}

export default Reader
