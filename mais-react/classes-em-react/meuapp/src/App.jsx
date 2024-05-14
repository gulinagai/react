import React from 'react'
import Produtos from './Produtos'

// Classes em react:

// Antigamente, antes dos hooks, a única forma de criarmos componentes com estados e modificar esses estados, era através de classes, ou melhor,
// através de uma extensão da classe React.Component.

// O JSX que é renderizado pelo componente da classe deve estar dentro do return do método render()

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Titulo</h1>
//         <Produtos/> 
//       </>
//   )
//   }
// }
// O uso de outro componente continua igual.

// this.props:

// As props ficam dentro do objeto da classe, então, eu tenho acesso as props utilizando this.props dentro da classe. (O uso-exemplo está no arquivo Produtos.jsx)

 class App extends React.Component {
   render() {
     return (
       <>
         <h1>Titulo</h1>
         <Produtos
           nome="playstation"
         /> 
       </>
   )
   }
 }

// continuação da explicação sobre classes em react no arquivo Produto.jsx.

export default App;
