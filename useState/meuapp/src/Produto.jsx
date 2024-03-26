import React from 'react'

const Produto = ({ dadosProduto } ) => {
  const preco = (+dadosProduto.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  return (
    <>
        <h1>{dadosProduto.nome}</h1>
        <p>{preco}</p> 
        <img src={dadosProduto.fotos[0].src}/>
        <p>{dadosProduto.descricao}</p>
    </>
  )
}

export default Produto
