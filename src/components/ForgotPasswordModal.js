import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { InputText, H1, Button, Link, P } from '@legible/ui-components'

export const ForgotPasswordModal = ({
  email: initialEmail = '',
  handleForgotPassword: forgotPasswordCallback = () => {}
}) => {
  const [email, setEmail] = useState(initialEmail)

  const handleEmail = e => setEmail(e.target.value)

  const handleForgotPassword = () => forgotPasswordCallback({email, password})

  return (
    <>
      <H1 className='text-center mb-5'>Forgot Password?</H1>
      <P>Enter the email address you use to login, and we'll send you instructions to reset your password.</P>
      <InputText
        id='log-in-email'
        className='mt-4 mb-4'
        hideLabel
        labelText='Email'
        placeholder='Email'
        value={email}
        onChange={handleEmail}
      />
      <Button className='mb-5' fullWidth onClick={handleForgotPassword}>
        Send password reset instructions
      </Button>
      <Link as={NavLink} to="/sign-in">Back to log in</Link>
    </>
  )
}

export default ForgotPasswordModal
