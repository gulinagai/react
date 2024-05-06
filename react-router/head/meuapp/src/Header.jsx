import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation()  

  React.useEffect(()=>{
    console.log('Mudou de rota')
  },[location])

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {' '}
        <NavLink to="sobre">Sobre</NavLink>
        {' '}
        <NavLink to="contato">Contato</NavLink>
      </nav>
    </>
  ) 
  
}


export default Header
