import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Spinner } from '@legible/ui-components'
import { useAuthDispatch, useUserState } from '@legible/context-provider'

import { Footer, Header, SignInModal } from '../components'

const SignIn = () => {
  const { signIn } = useAuthDispatch()
  const { username, isLoading } = useUserState()
  const history = useHistory()
  const { search } = useLocation()
  const params = new URLSearchParams(search);

  if(isLoading) return (
    <Spinner overlay />
  )

  const handleSignIn = ({email, password}) => signIn(email, password)

  useEffect(() => {
    if(username) {
      if(params.has('ref')) return history.push(params.get('ref'))
      history.push('/')
    }
  }, [username])

  return (
    <>
      <Header logoOnly />
      <Container maxWidth='45.5rem' margin='7rem auto 12rem'>
        <SignInModal handleSignIn={handleSignIn} />
      </Container>
      <Footer />
    </>
  )
}
export default SignIn
