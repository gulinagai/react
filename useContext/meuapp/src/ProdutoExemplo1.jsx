import React from 'react'
import UserContext from './UserContextExemplo1';


const Produto = () => {
    const global = React.useContext(UserContext)
    console.log(global)
  return (
    <>
        <p>
            Nome: {global.nome}
        </p>
        <p>
            Idade: {global.idade}
        </p>
    </>
  )
}

export default Produto
