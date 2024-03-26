import React from 'react'


const ProductButton = ({ url, produto, setProdutoAtivo, dadosProduto, setDadosProduto, produtoAtivo, setLoading }) => {
    function fetchURL(){
        setLoading(true)
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((bodyJSON)=>{
            setProdutoAtivo(true)
            setDadosProduto(bodyJSON)
            setLoading(false)
        })
    }
    console.log(produtoAtivo)
    console.log(dadosProduto)


  return (
    <>
        <button onClick={fetchURL} style={{margin: '1rem'}}>
        {produto}
        </button>
    </>
    
  )
}

export default ProductButton
