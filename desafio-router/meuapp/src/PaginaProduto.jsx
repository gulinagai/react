import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './PaginaProduto.css'
import Loading from './Loading'

const PaginaProduto = ({ paginaProdutoAtual, setPaginaProdutoAtual, setLoad, load, error, setError }) => {

    const params = useParams()
    const location = useLocation()
    React.useEffect(()=>{
    async function puxarProdutoUnico() {
        try {
            setLoad(true)
            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
            const jsonProdutoUnico = await response.json()
            setPaginaProdutoAtual(jsonProdutoUnico)
        } catch(erro) {
            setError('Ocorreu um erro.')
        } finally {
            setLoad(false)
        }
    }
    puxarProdutoUnico()
       
    }, [location, params.id, setPaginaProdutoAtual, setLoad, setError])
  
    if(error) return <p>{error}</p>
    if(load) {
        return <Loading/> 
    } else return (
    <>
     { paginaProdutoAtual &&
        <div className="container">
            {
                paginaProdutoAtual.fotos.map((foto, index)=>(
                    <img 
                        key={index} 
                        src={foto.src} 
                        alt="" 
                        className={index === 1 ? 'segundaImg' : ''}
                    />
                ))
            }
            <div className="detalhesProduto">
                <h2>{paginaProdutoAtual.nome}</h2>
                <p className="preco">R$ {paginaProdutoAtual.preco.replace('.', ',')}</p>
                <p className="descricao">{paginaProdutoAtual.descricao}</p>
            </div>
        </div> } 
    </>
  )
}

export default PaginaProduto
