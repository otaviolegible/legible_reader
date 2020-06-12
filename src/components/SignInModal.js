
import React, { useState } from 'react'
import { InputText, Button } from '@legible/ui-components'

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
      <InputText placeholder='email' value={email} onChange={handleEmail} />
      <InputText placeholder='password' value={password} onChange={handlePassword} />
      <Button onClick={handleSignIn}>Submit</Button>   
    </>
  )
}

export default SignInModal
