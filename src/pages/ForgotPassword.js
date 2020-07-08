import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from '@legible/ui-components'
import { useAuthDispatch, useUserState } from '@legible/context-provider'

import { Footer, Header, ForgotPasswordModal } from '../components'

const ForgotPassword = () => {
  const { forgotPassword } = useAuthDispatch()
  const { username } = useUserState()
  const history = useHistory()

  const handleForgotPassword = ({email, password}) => forgotPassword(email, password)

  useEffect(() => {
    if(username) history.push('/profile')
  }, [username])

  return (
    <>
      <Header logoOnly />
      <Container maxWidth='45.5rem' margin='7rem auto 12rem'>
        <ForgotPasswordModal handleForgotPassword={handleForgotPassword} />
      </Container>
      <Footer />
    </>
  )
}
export default ForgotPassword
