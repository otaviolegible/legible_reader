import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from '@legible/ui-components'
import { useAuthDispatch, useUserState } from '@legible/context-provider'

import { Footer, Header, SignUpModal } from '../components'

const SignUp = () => {
  const { signUp } = useAuthDispatch()
  const { username } = useUserState()
  const history = useHistory()

  const handleSignUp = ({email, password}) => signUp(email, password)

  useEffect(() => {
    if(!username) return
    history.goBack()
  }, [username])

  return (
    <>
      <Header />
      <Container maxWidth='45.5rem' margin='7rem auto 12rem'>
        <SignUpModal handleSignUp={handleSignUp} />
      </Container>
      <Footer />
    </>
  )
}
export default SignUp
