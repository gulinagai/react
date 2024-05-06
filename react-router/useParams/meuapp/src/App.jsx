import React from 'react'
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
