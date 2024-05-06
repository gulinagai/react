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

// Nested Routes:

// Utilizamos nested routes(rotas aninhadas) quando precisamos de rotas dentro de rotas.

// Como por exemplo: perfil/editar e perfil/certificados

// Utilize o /* para definir que existem outras rotas dentro.

// Devemos criar um componente para cada rota filho, pois cada rota filho renderizará um componente diferente.

// Existem duas formas:

// A 1º é criar uma navegação com Link ou NavLink, e as rotas tudo dentro do próprio componente que é o componente renderizado da rota desejada.

// A 2º é definir todas as rotas no arquivo App.jsx e utilizar o componente <OutLet/> para mostrarmos as rotas dentro do componente onde queremos mostrá-las. A navagação continua no componente da rota que terá as rotas aninhadas.

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
