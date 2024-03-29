import React from 'react'
import Produto from './Produto'

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const App = ()=>{
  const [dados, setDados] = React.useState(null)
  const [produto, setProduto] = React.useState(null)

  React.useEffect(()=>{
    if(localStorage.produto){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${localStorage.produto}`)
      .then((resolve)=>resolve.json())
      .then((json)=>setDados(json))
      setProduto(localStorage.produto)
    } 
  }, [])

  React.useEffect(()=>{

  }, [])
  
  function fetchProduto(event) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    .then((resolve)=>resolve.json())
    .then((json)=>setDados(json))
  }

   React.useEffect(()=>{
    if(dados !== null){
      localStorage.produto = dados.id
      setProduto(localStorage.produto)
    }
   }, [dados])


  return (
      <>
      <h1>Preferência: {produto}</h1>
      <button onClick={fetchProduto}>notebook</button>
      <button onClick={fetchProduto}>smartphone</button>
      {dados && (
        <Produto dados={dados}/>
      )}
      </>
  )
}
 

export default App;
