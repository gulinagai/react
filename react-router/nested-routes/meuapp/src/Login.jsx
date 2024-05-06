import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  function handleClick() {
    console.log('Usuário logou.')
    navigate('/sobre')
  }


  return (
    <button onClick={handleClick}>Entrar</button>
  )
}

export default Login
