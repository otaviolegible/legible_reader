import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuthState, useAuthDispatch } from '@legible/context-provider'

export const VerifyEmail = () => {
  const { isVerified } = useAuthState()
  const { verifyEmail } = useAuthDispatch()
  const { search } = useLocation()
  const urlParams = new URLSearchParams(search);
  const email = urlParams.get('email')
  const code = urlParams.get('code')

  useEffect(() => {
    if(!isVerified) verifyEmail(email, code)
    if(isVerified) history.push('/dashboard')
    return
  }, [isVerified])

  return <p>Please wait while we verify your email...</p>   
}

export default VerifyEmail