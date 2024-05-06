import React from 'react'
import { useNavigate } from 'react-router-dom'

// useNavigate():

// É um hook importado do react router dom

// Ele permite navegarmos programaticamente entre as rotas.

// O usuário realiza algo, e quando ocorre esse algo, ele é redirecionado a outra rota automaticamente. Por exemplo: O usuário reailza login e é enviado para a página sobre:

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
