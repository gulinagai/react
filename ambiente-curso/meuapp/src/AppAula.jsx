import React from 'react'

// function App() {
//   return   <a className="ativo" href="https://www.instagram.com/gunagai">Instagram </a>
// }

// <React.Fragment>/<>:

// const App = () =>{
//   return (
//   <>    
//   <label htmlFor="nome">Nome</label>
//   <input type="text" id="nome" />
//   </>
//   )
  // Pode ser <> ou <React.Fragment>, é a mesma coisa
// }

// camelCase:

// const App = () => {
//   return <video autoPlay/>
// }

// Expressões e variáveis:

// const App = () =>{
//   const nome = 'Guli'
//   return <p>{nome}</p>
// }

// const App = () =>{
//  const desconto = 50
//  const preco = 500
//  return <p>{preco - desconto}</p> 
// }

// const App = () =>{
//   const ativo = true
//   return <p className={ativo ? 'ativo' : 'inativo'}></p>  
// }

// const titulo = <h1>Titulo do texto</h1>

// const App = () =>{
//  return <div>{titulo}</div> 
// }

// Propriedades de objetos, e retornos de funções usando callback(devem ser string, numero ou array de strings/numeros para aparecer na tela. Valores booleanos, undefined e null não aparecem na tela):

// const App = () =>{
//   function nome() {
//   return 'Gustavo'
//   }
//   function soma(x) {
//     return x + x
//   }
//   const carro = {
//     rodas: 4,
//     marca: 'Lamborghini'
//   }
//   return (
//     <div>
//       <p>{'MINHA EMPRESA'.toLowerCase()}</p>
//       <p>{30 % 2}</p>
//       <p>{true}</p>
//       <p>{undefined}</p>
//       <p>{(() => 'Função executada')()}</p>
//       <p>{nome()}</p>
//       <p>{soma(6)}</p>
//       <p>{soma(6) === 12 ? 'Soma correta' : 'Soma incorreta'}</p>
//       <p>{soma(6) === 12 && 'Soma correta'}</p>
//       <p>{Date.now()}</p>
//       <p>{new Date().getFullYear()}</p>
//       <p>marca: {carro.marca}, rodas: {carro.rodas}</p>
//     </div>
//   )
// }

// Style no JSX:

const App = () =>{
  const estilo = {
    color: 'red',
    fontSize: '2rem',
    fontFamily: 'Arial'
  }
  return (
    <div>
      <h1 style={estilo}>Empresa</h1>
      <p style={{color: 'green', fontSize: '1.5rem'}}>Venha conferir</p>
    </div>
  )
}







export default App;
