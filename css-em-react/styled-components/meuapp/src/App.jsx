import React from 'react'
import styled from 'styled-components'

// Styled-Component:

// const Produto = styled.p`
//   font-size: 2.5rem;
//   background-color: blue;
//   color: tomato;
// `
// const App = ()=> {
//   return (
//     <div>
//       <Produto>Produto 1</Produto>
//     </div>
//   );
// }

// Posso criar os nomes especificamente já que cada elemento é único. E claro, pode utilizar o componente mais de uma vez.

// const ProdutosContainer = styled.div`
//   display: flex;
// `

// const Produto = styled.div`
//   flex: 1;
// `

// const Titulo = styled.h1`
//   font-size: 2em;
// `

// const Comprar = styled.button`
//   font-size: 1.5em;
//   background: transparent;
//   padding: 0.5rem;
//   border-radius: 4px;
//   border: 2px solid;
//   cursor: pointer;
// `

// const Preco = styled.span`
//   background: #53d956;
//   color: white;
//   display: inline-block;
//   border-radius: 5px;
//   padding: 0.5rem;
// `

// const App = ()=> {
//   function template(value) {
//     console.log(value, total)
//     console.log(total)
//   }
  
//   const total = 10
  
//   template`São ${total} no total`
  
  

//   return (
//     <ProdutosContainer>
//       <Produto>
//         <Titulo>
//           Notebook <Preco>R$ 1999</Preco>
//         </Titulo>
//         <Comprar>Comprar</Comprar>
//       </Produto>
//       <Produto>
//         <Titulo>
//           Smartphone <Preco>R$ 2999</Preco>
//         </Titulo>
//         <Comprar>Comprar</Comprar>
//       </Produto>
//     </ProdutosContainer>
//   )
// }

// Template String Transpilation:

// É uma forma de ativar o método/função com uma string na fremte, é totalmente válido em JavaScript e é como se utiliza em styled-components.

// const App = ()=> {
//   function template(value) {
//     console.log(value, total)
//     console.log(total)
//   }
  
//   const total = 10
  
//   template`São ${total} no total`
  
  

//   return null
// }

// Props no Styled Component:

// const Preco = styled.p`
// background-color: ${(props)=> props.cor};
// color: white;
// display: inline-block;
// border-radius: 5px;
// padding: 0.5rem;
// `
// const App = ()=>{
//   return (
//     <div>
//       <Preco cor="#53d956">R$ 2900</Preco>
//       <Preco cor="#84e">R$ 1999</Preco>
//     </div>
//   )
// }

// Estado no Styled Component (utilizando props):

// const Button = styled.button`
// background: ${({ ativo })=> ativo ? '#53d956' : '#000'};

// border: 1px solid black;
// font-size: 1rem;
// padding: 0.5rem;
// border-radius: 4px;
// color: white;
// cursor: pointer;

// `
// const App = ()=>{
//   const [ativo, setAtivo] = React.useState(false)

//   return (
//     <Button ativo={ativo} onClick={()=> setAtivo(!ativo)}>
//       Ativar
//     </Button>
//   )
// }

// Pseudo-Elementos em Styled Components:

const Comprar = styled.button`
  font-size: 1.5rem;
  background: transparent;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: -8px;
    right: -8px;
    background: #53d956;
  }
`
const App = ()=>{
  
  return (
    <Comprar>
      Comprar
    </Comprar>
  )
}

export default App;
