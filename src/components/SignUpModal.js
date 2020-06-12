
import React, { useState } from 'react'
import { InputText, Button } from '@legible/ui-components'

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
      <InputText placeholder='email' value={email} onChange={handleEmail} />
      <InputText placeholder='password' value={password} onChange={handlePassword} />
      <InputText placeholder='confirm password' value={password2} onChange={handlePassword2} />
      <Button onClick={handleSignUp}>Submit</Button>   
    </>
  )
}

export default SignUpModal
