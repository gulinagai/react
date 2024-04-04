import React from 'react'
import { GlobalContext } from './GlobalContextExemplo2'

const Produto = () => {
    const global = React.useContext(GlobalContext)
    console.log(global)
  return (
    <>
    <p>
      Nome: {global.nome}
    </p>
    <p>
      Idade: {global.idade}
    </p>
    <p>
        Contador: {global.contar}
    </p>
    <button style={{margin: '1rem'}} onClick={()=> global.setContar((contar)=> contar + 1)}>
    Adicionar com setContar do onClick
    </button>
    <button style={{margin: '1rem'}} onClick={()=> global.adicionarUm()}>
    Adicionar 1 com função declarada no arquivo GlobalContext
    </button>
    <button style={{margin: '1rem'}} onClick={()=> global.adicionarDois()}>
    Adicionar 2 com função declarada no arquivo GlobalContext
    </button>
    </>
  )
}

export default Produto
