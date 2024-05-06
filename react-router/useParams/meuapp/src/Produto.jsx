import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Produto = () => {

  // useParams():

  // O useParams() retorna um objeto contendo como chave o nome que foi passado e o valor. No caso: id: notebook ou id: smartphone 
  
  const params = useParams()
  console.log(params)

  // useLocation():

  // O useLocation() retorna um objeto contendo informações da rota como: pathname, search, hash, state e key.

  // Algo muito importante entre essas informações é o search.

  // O search nada mais é do que os parâmetros passados para aquela rota.

  // A passagem de parâmetros começa com '?'
  // depois 'chave'='valor' e '&' para separar eles.

  // Da seguinte forma:

  // .../produto/smartphone?q=verde&memoria=16&placaDeVideo=1050ti

  // Para obter esses dados, eu posso fazer da seguinte forma:
  
  const location = useLocation()
  console.log(location)

  const search = new URLSearchParams(location.search)

  console.log(search.get('memoria'))

  console.log(search.get('placaDeVideo'))

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  )
}

export default Produto
