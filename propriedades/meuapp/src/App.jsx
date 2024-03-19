import React from 'react'
import Form from './Form/Form'
import Header from './Header'

// Props:

// const Titulo = (props)=>{
//   return <h1 style={{color: props.cor}}>{props.texto}</h1>
// }

// const App = ()=> {
//   return (
//   <div>
//     <Titulo cor="blue" texto="Meu primeiro título"/>
//     <Titulo cor="red" texto="Meu segundo título"/>
//   </div>
//   )
// }

// Desestruturando props:


// const Titulo = ({cor, texto})=>{
//   return <h1 style={{color: cor}}>{texto}</h1>
// }

// const App = ()=> {
//   return (
//   <div>
//     <Titulo cor="blue" texto="Meu primeiro título"/>
//     <Titulo cor="red" texto="Meu segundo título"/>
//   </div>
//   )
// }

// props.children:


// const Titulo = (props)=>{    // ou ({ children })
//   return <h1>{props.children}</h1> // {children}
// }

// const App = ()=> {
//   return (
//   <div>
//     <Titulo>Meu Título</Titulo>
//     <Form/>
//     <Form/>
//     <Titulo>
//       <p>Parágrafo 1</p>
//       <p>Parágrafo 2</p>
//     </Titulo>
//   </div>
//   )
// }

// Rest(...argumentos dentro do () da função) e Spread(...argumentos dentro da função em si) nas props:

// está na pasta Form

// Podemos passar diferentes tipos de dados,
// não necessariamente uma string:


const Titulo = (props)=>{    // ou ({ children })
  return <h1>{props.children}</h1> // {children}
}

const App = ()=> {
  const logado = true
  const nome = 'Guli'
  return (
  <div>
    <Header logado={logado} nome={nome}/>
    <Titulo>Meu Título</Titulo>
    <Form/>
    <Form/>
    <Titulo>
      <p>Parágrafo 1</p>
      <p>Parágrafo 2</p>
    </Titulo>
  </div>
  )
}




export default App;
