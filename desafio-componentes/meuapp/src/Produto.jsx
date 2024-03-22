import React from 'react'

const Produto = ({ produto }) => {
  return (
        <div style={{border: '1px solid black', margin: '1rem 0', padding: '1rem'}}>
        <h2>{produto.nome}</h2>
        <ul>
            {produto.propriedades.map((propriedade)=>{
                return <li key={propriedade}>{propriedade}</li>
            })}
        </ul>               
        </div>
        )
}

export default Produto
