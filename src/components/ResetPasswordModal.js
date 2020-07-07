import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { InputText, H1, Button, Link, P } from '@legible/ui-components'

export const ResetPasswordModal = ({
  password: initialPassword = '',
  handleResetPassword: resetPasswordCallback = () => {}
}) => {
  const [password, setPassword] = useState(initialPassword)
  const [password2, setPassword2] = useState(initialPassword)

  const handlePassword = e => setPassword(e.target.value)
  const handlePassword2 = e => setPassword2(e.target.value)

  const handleResetPassword = () => resetPasswordCallback({email, password})

  return (
    <>
      <H1 className='text-center mb-5'>Reset Password</H1>
      <InputText
        id='reset-password-new'
        placeholder='New Password'
        value={password}
        onChange={handlePassword}
        hideLabel
        labelText='New Password'
      />
      <InputText
        id='reset-password-confirm'
        className='mt-3 mb-4'
        placeholder='Re-enter New Password'
        value={password2}
        onChange={handlePassword2}
        hideLabel
        labelText='Re-enter New Password'
      />
      <Button className='mb-5' fullWidth onClick={handleResetPassword}>
        Reset Password
      </Button>
    </>
  )
}

export default ResetPasswordModal
