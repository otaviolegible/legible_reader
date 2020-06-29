import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, P } from '@legible/ui-components'
import { useAuthState, useAuthDispatch } from '@legible/context-provider'

import { Footer, Header } from '../components'

export const VerifyEmail = () => {
  const { isVerified } = useAuthState()
  const { verifyEmail } = useAuthDispatch()
  const { search } = useLocation()
  const urlParams = new URLSearchParams(search);
  const email = urlParams.get('email')
  const code = urlParams.get('code')

  useEffect(() => {
    if(!isVerified) verifyEmail(email, code)
    if(isVerified) history.push('/dashboard')
    return
  }, [isVerified])

  return (
    <>
      <Header />
      <Container maxWidth='45.5rem' margin='7rem auto 12rem'>
        <P>Please wait while we verify your email...</P>
      </Container>
      <Footer />
    </>
  )
}

export default VerifyEmail