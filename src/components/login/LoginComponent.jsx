import React from 'react'
import Input from '../input/Input'
import Button from '../button/Button'

const LoginComponent = ({onChange, onSubmit}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input type="text" name={"userName"} placeholder={"userName"}onChange={onChange} />
        <Input type="email" name={"email"} placeholder={"email"} onChange={onChange} />
        <Input type="password" name={"password"} placeholder={"password"} onChange={onChange} />
        <Button text={"login"}></Button>
        </form>
    </div>
  
  )
}

export default LoginComponent