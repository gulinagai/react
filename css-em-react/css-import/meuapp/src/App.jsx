import React from 'react'
import './App.css'
import Titulo from './Componentes/Titulo'
import Produto from './Componentes/Produto';

// import de css no React:

// function App() {
//   return (
//     <div> Div
//       <p>Olá, eu sou um parágrafo</p>
//     </div>
//   );
// }

// importar componentes que possuem css, mesmo sem utilizar o componente, aplica o css na build final:

// function App() {
//      return (
//        <div> Div
//          <h1>titulo</h1>
//          <p>Olá, eu sou um parágrafo</p>
//        </div>
//      );
//    }

// Conflito de import:

function App() {
  return (
    <div> Div
      <h1>titulo</h1>
      <Produto/>
      <p>Olá, eu sou um parágrafo</p>
    </div>
  );
}

// se houverem duas ou mais atribuições de estilo para um mesmo elemento, o css irá aplicar o ultimo estilo aplicado seguindo a ordem do import, ou seja, o ultimo import contendo o estilo permanecerá no bundle final.


// para evitar esses conflitos deve-se identificar nomes únicos.

export default App;
