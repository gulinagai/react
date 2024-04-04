import React from 'react'
import GlobalContext from './GlobalContext'

const Produtos = () => {
  const globalDados = React.useContext(GlobalContext)
 
  // como esse globalDados retorna um objeto, também posso desestruturar se eu quiser.
  // ficaria { dados, limparDados } = React.useContext(GlobalContext)
  // e dai eu utilizaria 'dados' e limparDados() ao invés de globalDados.dados e globalDados.limparDados()

  
  return (
    <>
        <ul>
        {globalDados.dados ? 'Produto:' : null} 
        {
            globalDados.dados && globalDados.dados.map((produto)=>(
            <li key={produto.id}>{produto.nome}</li>
        ))}  
        </ul>
        <button onClick={()=> globalDados.limparDados()}>Limpar</button>
    </>
  )
}

export default Produtos
