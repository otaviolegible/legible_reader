import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from '@legible/ui-components'
import { useAuthDispatch, useUserState } from '@legible/context-provider'

import { Footer, Header, ResetPasswordModal } from '../components'

const ResetPassword = () => {
  const { resetPassword } = useAuthDispatch()
  const { username } = useUserState()
  const history = useHistory()

  const handleResetPassword = ({email, password}) => resetPassword(email, password)

  useEffect(() => {
    if(username) history.push('/profile')
  }, [username])

  return (
    <>
      <Header logoOnly />
      <Container maxWidth='45.5rem' margin='7rem auto 12rem'>
        <ResetPasswordModal handleResetPassword={handleResetPassword} />
      </Container>
      <Footer />
    </>
  )
}
export default ResetPassword
