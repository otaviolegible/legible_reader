import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from '@legible/ui-components'
import { useAuthDispatch, useUserState } from '@legible/context-provider'

import { Footer, Header, SignInModal } from '../components'

const SignIn = () => {
  const { signIn } = useAuthDispatch()
  const { username } = useUserState()
  const history = useHistory()

  const handleSignIn = ({email, password}) => signIn(email, password)

  useEffect(() => {
    if(!username) return
    history.goBack()
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
