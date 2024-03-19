import React from 'react'

const Header = ({logado, nome}) => {
  if(logado) {
    return <header>Seja Bem Vindo, {nome}</header>
  } else {
    return <header>Header</header>
  }
    
  
}

export default Header
