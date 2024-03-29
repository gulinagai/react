import React from 'react'
import Produto from './Produto'

// React.useEffect():

// É possível passar 2 argumentos, um callback e uma array(dependências(que são os estados)), nessa ordem.

// a) .useEffect() apenas com o callback, sem array:

// function App() {
//   const [contar, setContar] = React.useState(0)
//   console.log('Executou fora')
//   React.useEffect(()=>{
//     console.log('Executou dentro')
//   })
//   return  (
//     <button onClick={()=>setContar(contar + 1)}>{contar}</button>
//   )
// }

// Se não for passado uma array de dependências será entendido que o que está dentro do callback do useEffect
// deve ser executado sempre, afinal, não foi passado nada então o código será executado toda vez que o componente for renderizado(estado inicial, atualizado e destruido caso seja)



// b) .useEffect() com o callback(1ºargumento), com array vazia:

// function App() {
//   const [contar, setContar] = React.useState(0)
//   console.log('Executou fora')
//   React.useEffect(()=>{
//     console.log('Executou dentro')
//   }, [])
//   return  (
//     <button onClick={()=>setContar(contar + 1)}>{contar}</button>
//   )
// }

// Desta vez, o callback será executado apenas uma vez, na montagem inicial do componente, pois não foi passado nenhuma dependência, então qualquer que seja a alteração de qualquer estado, não executará o callback novamente.

// c) .useEffect() com o callback(1ºargumento), com array com dependência(s):

// function App() {
//   const [contar, setContar] = React.useState(0)
//   const [ativo, setAtivo] = React.useState(false)
//   console.log('Executou fora')
//   React.useEffect(()=>{
//     console.log('Executou dentro')
//   }, [contar])
//   return  (
//     <>
//     <button style={{display: 'block', marginBottom: '1rem'}} onClick={()=>setContar(contar + 1)}>{contar}</button>

//     <button onClick={()=>setAtivo(!ativo)}>{ativo ? 'Ativo' : 'Inativo'}</button>
//     </>
    
//   )
// }

// Desta vez, o callback é executado de acordo com as dependências que foram passadas, pode existir outros estados em que não foram passados como dependências, e então, a alteração destes, não executará o callback novamente.

// Importante lembrar: toda vez que setNome do useState atualiza o estado, ele não apenas atualiza o estado como renderiza o componente novamente.
// Renderizar o componente novamente significa que toda a função do componente, ou seja, tudo que tem dentro dela foi executado novamente. 

// Dependências Obrigatórias:

//   function App() {
//    const [contar, setContar] = React.useState(0)
//    console.log('Executou fora')
//    const titulo = 'Titulo'
//    React.useEffect(()=>{
//      document.title = titulo + contar
//    }, [])
//    // O ESLint avisa que está faltando a dependência, caso eu esteja usando o estado referente a dependência dentro do callback
//    return  (
//      <button onClick={()=>setContar(contar + 1)}>{contar}</button>
//    )
//  }

 // Componente montou:
 
 // O useEffect é muito utilizado quando precisamos definir um efeito que deve ocorrer apenas um vez, como o fetch de dados no servidor, por exemplo.

//  function App() {
//   const [contar, setContar] = React.useState(0)
//   const [dados, setDados] = React.useState(null)
  
  
//   React.useEffect(()=>{
//     // aqui puxará os dados do arquivo json apenas uma vez.
//     fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
//     .then((response)=> response.json())
//     .then((json)=>setDados(json))
//   }, [])
//   return  (
//     <div>
//       {dados && (
//         <div>
//           <h1>{dados.nome}</h1>
//           <p>R$ {dados.preco * contar}</p>
//         </div>
//       )}

//       <button onClick={()=>setContar(contar + 1)}>{contar}</button>
//     </div>
    
//   )
// }

// Multiplos Efeitos:

// Podemos ter diferentes tipos de efeitos no nosso site, o ideal é separar efeitos diferentes em useEffect's diferentes.

// function App() {
//   const [contar, setContar] = React.useState(0)
//   const [modal, setModal] = React.useState(false)
  
  
//   React.useEffect(()=>{
//     document.title = 'Total ' + contar

//   }, [contar])

//   React.useEffect(()=>{
//     setContar(0)
//   }, [modal])

//   // Diferentes React.useEffect() para cada finalidade específica.

//   return  (
//     <div>
//       {modal && (
//         <p>Meu Modal</p>
//       )}
//       <button onClick={()=>setModal(!modal)}></button>

//       <button onClick={()=>setContar(contar + 1)}>{contar}</button>
//     </div>
    
//   )
// }

// Antes de desmontar/desrenderizar(sumir da tela):

// Também podemos acionar um efeito quando um componente é desrenderizado, desmontado, quando ele some da tela.
// Basta adicinoar uma função de callback no retorno do 1º argumento do useEffect, que também é uma função de callback.

// exemplo: Remover o eventListener assim que o componente é desmoontado:

const App = ()=>{
  const [ativo, setAtivo] = React.useState(false)

  return (
      <>
      {ativo && (
        <Produto />
      )}
      <button onClick={()=>setAtivo(!ativo)}>Ativar</button>
      </>
  )
}
 

export default App;
