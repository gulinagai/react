import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
 
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a Home.</p>
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>{' '}
      <Login/>
    </div>
  )
}

export default Home
