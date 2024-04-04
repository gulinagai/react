import React from 'react'
// import UserContext from './UserContextExemplo1';
import { GlobalStorage } from './GlobalContextExemplo2';
// import Produto from './ProdutoExemplo1';
import Produto from './ProdutoExemplo2';

// useContext:
// Útil para utilizar dados/estados de forma global.

// Exemplo 1:

// function App() {
//   return (
//     <UserContext.Provider value={{nome: 'Guli', idade: 24}}>
//       <Produto />
//     </UserContext.Provider>
//   );
// }

// Exemplo 2: ( Mais fiel ao que vou utilizar no dia-a-dia)

function App() {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App;
