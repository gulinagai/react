import React from 'react'
import Produto from './Produto'
import './Produtos.css'
import Loading from './Loading'

import { GlobalContext } from './GlobalContext'

const Produtos = ({ listaProdutos, setListaProdutos, setLoad, load, error, setError }) => {

  React.useEffect(()=>{

    async function puxarLista() {
        try {
            setError(null)
            setLoad(true)
            const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
            const dados = await response.json()
            setListaProdutos(dados)
        } catch(erro) {
            setError('Ocorreu um erro.')
        } finally {
            setLoad(false)
        }
    }
    puxarLista()
   
  }, [setListaProdutos, setLoad, setError])

  if(error) return <p>{error}</p>
  if(load) {
    return <Loading/> 
  } else return (
    <GlobalContext.Provider value={listaProdutos}>
        <div className="cardsContainer">
            {
                listaProdutos && listaProdutos.map((produto, index)=>(
                    <Produto
                        key={produto.id}
                        imgs={produto.fotos}
                        title={produto.nome}
                        index={index}
                    />
                ))
            }
            </div>
    </GlobalContext.Provider>
   
  )
}

export default Produtos
