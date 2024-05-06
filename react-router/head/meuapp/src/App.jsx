import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Contato from './Contato'
import Home from './Home'
import Sobre from './Sobre'
import Produto from './Produto'
import NotFound from './NotFound'

// import ProdutoDescricao from './ProdutoDescricao'
// import ProdutoAvaliacao from './ProdutoAvaliacao'
// import ProdutoCustomizado from './ProdutoCustomizado'

// Head:

// quando retornamos algo nos componentes SEMPRE estamos falando com o body (<body></body>) do documento. Para lidarmos com o Head ou seja, o elemento <head></head> existem duas formas:

// 1ºForma: Criando uma função do zero para isso:

// Vamos criar um head para o home e para o sobre.

// 2ºForma: Utilizando o { Helmet } from 'react-helmet'

// Primeiro precisa instalá-lo:

// npm install react-helmet

// importar: import { Helmet } from 'react-helmet'

// e usar o componente <Helmet> como se fosse o <head> do html


const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contato" element={<Contato/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="produto/:id/*" element={<Produto/>}/>
          {/* <Route path="" element={<ProdutoDescricao/>}/>
          <Route path="avaliacao" element={<ProdutoAvaliacao/>}/>
          <Route path="customizado" element={<ProdutoCustomizado/>}/>
        </Route> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
