import React from 'react'

const Produto = ({ dados }) => {
  const preco = (+dados.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  return (
    <>
    <h1>{dados.nome}</h1>
    <p>{preco}</p>
    </>
  )
}

export default Produto
