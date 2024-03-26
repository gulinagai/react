import React from 'react'
import ProductButton from './ProductButton'
import Produto from './Produto'

// Os links abaixo puxam dados de um produto em formato JSON 
// https://ranekapi.origamid.dev/json/api/produto/tablet 
// https://ranekapi.origamid.dev/json/api/produto/smartphone 
// https://ranekapi.origamid.dev/json/api/produto/notebook 
// Crie uma interface com 3 botões, um para cada produto. 
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela. // Mostre apenas um produto por vez 
// Mostre a mensagem carregando... enquanto o fetch é realizado

export const App = () => {
 
  let [produtoAtivo, setProdutoAtivo] = React.useState(false)
  let [dadosProduto, setDadosProduto] = React.useState(null)
  let [loading, setLoading] = React.useState(false)

  return (
    <>
    <ProductButton 
    url="https://ranekapi.origamid.dev/json/api/produto/tablet" 
    produto="tablet" 
    produtoAtivo={produtoAtivo} 
    setProdutoAtivo={setProdutoAtivo} 
    dadosProduto={dadosProduto} 
    setDadosProduto={setDadosProduto}
    setLoading={setLoading}
    />
    
    <ProductButton 
    url="https://ranekapi.origamid.dev/json/api/produto/smartphone" 
    produto="smartphone" 
    produtoAtivo={produtoAtivo}
    setProdutoAtivo={setProdutoAtivo} 
    dadosProduto={dadosProduto} 
    setDadosProduto={setDadosProduto}
    setLoading={setLoading}
    />

    <ProductButton 
    url="https://ranekapi.origamid.dev/json/api/produto/notebook" 
    produto="notebook"
    produtoAtivo={produtoAtivo}
    setProdutoAtivo={setProdutoAtivo} 
    dadosProduto={dadosProduto} 
    setDadosProduto={setDadosProduto}
    setLoading={setLoading}
    />
    {
      loading ? <p>Carregando...</p> : null
    }
    {
       (!loading && produtoAtivo) ? 
       <Produto dadosProduto={dadosProduto}/> 
       :
       null
    }
   
    </>
  )
}
    
     
export default App
