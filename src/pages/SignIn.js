import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, GridContainer, GridItem, InputText, Button } from 'legible-ui-components'
import { useAuthDispatch, useUserState } from 'legible-context-provider'

const SignIn = () => {
  const [email, setEmail] = useState('ericribeiro@outlook.com.br')
  const [password, setPassword] = useState('Senha123!')
  const { signIn } = useAuthDispatch()
  const { user } = useUserState()
  const history = useHistory()

  const handleEmail = e => setEmail(e.target.value)

  const handlePassword = e => setPassword(e.target.value)

  const handleSignIn = () => signIn(email, password)

  useEffect(() => {
    if(!user.username) return
    history.push('/')
  }, [user])

  return (
    <Container>
      <GridContainer>
        <GridItem column='3 / 10'>
          <InputText placeholder='email' value={email} onChange={handleEmail} />
          <InputText placeholder='password' value={password} onChange={handlePassword} />
          <Button onClick={handleSignIn}>Submit</Button>
        </GridItem>
      </GridContainer>
    </Container>
  )
}
export default SignIn
