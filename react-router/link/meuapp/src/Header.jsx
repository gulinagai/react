import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Link: 

// Cria uma navegação de acordo com as rotas

// const Header = () => {
//   return (
//     <>
//       <nav>
//         <Link to="/">Home</Link>
//         {' '}
//         <Link to="sobre">Sobre</Link>
//         {' '}
//         <Link to="contato">Contato</Link>
//       </nav>
//     </>
//   ) 
  
// }

// NavLink:

// Cria uma navegação de acordo com as rotas e adiciona a classe 'active' na rota atual:

const Header = () => {
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
