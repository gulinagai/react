import React from 'react'
import './Produto.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

const Produto = ({ imgs, title, index }) => {
  const lista = React.useContext(GlobalContext) 
  return (
    <div className="card">
        <Link to={`produto/${lista[index].id}`}>
            <img
                className="imgProduto"
                src={imgs[0].src}
                alt="" />
        </Link>
        <h2>{title}</h2>
    </div>
  )
}

export default Produto
