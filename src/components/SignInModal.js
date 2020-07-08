import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { InputText, H1, Button, Link } from '@legible/ui-components'

export const SignInModal = ({
  email: initialEmail = 'ericribeiro@outlook.com.br',
  password: initialPassword = 'Senha123!',
  handleSignIn: signInCallback = () => {}
}) => {
  const [email, setEmail] = useState(initialEmail)
  const [password, setPassword] = useState(initialPassword)

  const handleEmail = e => setEmail(e.target.value)

  const handlePassword = e => setPassword(e.target.value)

  const handleSignIn = () => signInCallback({email, password})

  return (
    <>
      <H1 className='text-center mb-5'>Log in to Legible</H1>
      <InputText
        id='log-in-email'
        hideLabel
        labelText='Email'
        placeholder='Email'
        value={email}
        onChange={handleEmail}
      />
      <InputText
        id='log-in-password'
        className='mt-3 mb-4'
        hideLabel
        labelText='Password'
        placeholder='Password'
        value={password}
        onChange={handlePassword}
      />
      <p><small><Link as={NavLink} to='/forgot-password'>Forgot Password?</Link></small></p>
      {/* TO DO: Add option to stay logged in */}
      <Button className='mt-5 mb-5' fullWidth onClick={handleSignIn}>Log In</Button>
      <p>Don’t have a Legible account? <Link as={NavLink} to='/sign-up'>Sign Up</Link></p>
      {/* TO DO: Add FB + Google Log in */}
    </>
  )
}

export default SignInModal
