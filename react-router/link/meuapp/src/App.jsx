import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Contato from './Contato'
import Home from './Home'
import Sobre from './Sobre'
import NotFound from './NotFound'


const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contato" element={<Contato/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
