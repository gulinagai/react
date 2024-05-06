import React from 'react'

// React Router:

// Router: Serve para gerenciar as rotas

// Rota é simplesmente a URL da onde a página está no momento. exemplo: /sobre, /produtos, /contato

// E eu posso definir que componente aparecerá dependendo da rota em que a página estiver.

// 1º passo é instalar o React Router DOM (React Router para navegadores PC):

// npm install history react-router-dom

// após isso é só importar o BrowserRouter, o Routes e o Route, por desestruturação from 'react-router-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Contato from './Contato'
import Home from './Home'
import Sobre from './Sobre'
import Produto from './Produto'
import NotFound from './NotFound'

// Rota dinâmica:

// O uso de :nome irá definir uma rota dinâmica, onde nome poderá ser utilizado como uma variável dentro do componente utilizando o useParams()
// Serve para buscarmos rotas dinâmicas. Por exemplo: produto/notebook e produto/smartphone

// utilizei :id no exemplo mas pode ser qualquer nome.

const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contato" element={<Contato/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="produto/:id" element={<Produto/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
