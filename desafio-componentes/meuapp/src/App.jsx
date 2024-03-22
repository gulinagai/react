import React from 'react'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)



function App() {
  const { pathname } = window.location
  let paginaAtual
  if(pathname === '/produtos') {
    paginaAtual = <Produtos />
  } else {
    paginaAtual = <Home />
  }
  return (
  <>
    <Header/>
    {paginaAtual}
  </>
  )
}

export default App;
