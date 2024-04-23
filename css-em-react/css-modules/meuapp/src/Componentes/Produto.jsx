import React from 'react'
import stylesProduto from './Produto.module.css'

const Produto = () => {
    console.log(stylesProduto)
  return (
    <div>
        <h1 className={stylesProduto.titulo}>Notebook</h1>
        <p className={stylesProduto.preco}>R$ 12000</p>
        <button className={stylesProduto.comprarProduto}>Comprar</button>
    </div>
  )
}

// camelCase nas classes criadas no arquivo css:

// Caso precise, nunca utilizar hífen para declarar a classe no css, pois comoo o acesso é feito por um objeto, não funcionará colocando hífen, então usa o camelCase

// Funcionalidades extras:

// É possível criar variáveis, passar os estilos de um elemento para outro com a palavra composes e definit um estilo global, utilizando css modules. Mas essa prática não recomendada e nem muito utilizada, mas existe.

// Exemplos no arquivo Produto.module.css

export default Produto
