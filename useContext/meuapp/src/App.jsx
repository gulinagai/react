import React from 'react'
import { GlobalStorage } from './exercicio/GlobalContext';
import Produtos from './exercicio/Produtos';

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

function App() {
  return (
  <GlobalStorage>
    <Produtos />
  </GlobalStorage>
  )
}

export default App;
