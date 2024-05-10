import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Produtos from './Produtos'
import Contato from './Contato';
import Footer from './Footer';
import Loading from './Loading';



import './App.css'
import PaginaProduto from './PaginaProduto';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook


function App() {
  const [listaProdutos, setListaProdutos] = React.useState(null)
  const [paginaProdutoAtual, setPaginaProdutoAtual] = React.useState(null)
  const [load, setLoad] = React.useState(false)
  const [error, setError] = React.useState(null)

  return (
    <BrowserRouter>
    <main>
      <Header/>
        <Routes>
          <Route path="/*" element={
            <Produtos
                listaProdutos={listaProdutos} setListaProdutos={setListaProdutos}
                setLoad={setLoad}
                load={load}
                error={error}
                setError={setError}
            />
          }/>
          <Route path="produto/:id" element={ 
          <PaginaProduto
            paginaProdutoAtual={paginaProdutoAtual}
            setPaginaProdutoAtual={setPaginaProdutoAtual}
            setLoad={setLoad}
            load={load}
            error={error}
            setError={setError}
          />}/>
          <Route path="contato" element={<Contato/>}/>
        </Routes>
      
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
