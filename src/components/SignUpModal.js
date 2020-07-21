import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { InputText, Button, H1, Link, P } from '@legible/ui-components'

export const SignUpModal = ({
  email: initialEmail = '',
  password: initialPassword = '',
  handleSignUp: signUpCallback = () => {}
}) => {
  const [email, setEmail] = useState(initialEmail)
  const [password, setPassword] = useState(initialPassword)
  const [password2, setPassword2] = useState(initialPassword)

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handlePassword2 = e => setPassword2(e.target.value)

  const handleSignUp = () => signUpCallback({email, password})

  return (

    <>
      <H1 className='text-center mb-5'>Sign up by email</H1>
      <InputText
        id='sign-up-email'
        hideLabel
        labelText='Email'
        placeholder='Email'
        value={email}
        onChange={handleEmail}
      />
      <InputText
        id='sign-up-password'
        className='mt-3 mb-4'
        hideLabel
        labelText='Password'
        placeholder='Password'
        value={password}
        onChange={handlePassword}
      />
      <InputText
        id='sign-up-confirm-password'
        className='mt-3 mb-4'
        hideLabel
        labelText='Confirm Password'
        placeholder='Confirm Password'
        value={password2}
        onChange={handlePassword2}
      />
      {/* TO DO: Add proper links once pages have been added */}
      <P className='mt-4 mb-5'><small>By signing up you agree to our <Link as={NavLink} to='/terms-of-service' color='inherit'>Terms of Service</Link> and <Link as={NavLink} to='' color='inherit'>Privacy Policy</Link></small></P>
      {/* TO DO: Add opt-out for receiving emails */}
      <Button className='mb-5' fullWidth onClick={handleSignUp}>Sign Up</Button>
      <P>Already have a Legible account? <Link as={NavLink} to='/sign-in'>Log in</Link></P>
      {/* TO DO: Add FB + Google Sign up */}
    </>
  )
}

export default SignUpModal
