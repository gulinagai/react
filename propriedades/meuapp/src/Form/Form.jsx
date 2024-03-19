import React from 'react'
import Input from'./Input'

const Form = () => {
  return (
    <>
      <Input id="email" label="Email"/>
      <Input id="password" type="password" label="Password" required/>
      <button style={{margin: "1rem 0"}}>Entrar</button>
    </>
  )
}

export default Form