import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
      <nav className="navegacao">
        <NavLink 
            className="link" 
            to="" end>Produtos</NavLink>
        <NavLink 
            className="link" to="contato">Contato</NavLink>
      </nav>
    </>
  )
}

export default Header
