import React from 'react'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <Input />
      <label htmlFor="email">Email</label>
      <Input />
    </form>
  )
}

export default Form
