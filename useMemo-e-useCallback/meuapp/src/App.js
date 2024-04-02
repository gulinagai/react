import React from 'react'

// React.useMemo():

// localStorage.produto = 'smartphone'

// function App() {
//   const [contar, setContar] = React.useState(0)

//   const valor = React.useMemo(()=>{
//     const localStorageProduto = window.localStorage.getItem('produto')
//     console.log(localStorageProduto)
//     // código só é lido uma vez, e guarda o valor para ser utilizado nas outras renderizações
//     return localStorageProduto
//   }, [])
  
//   console.log(valor)
//   return (
//     <button onClick={()=> setContar(contar + 1)}>{contar}</button>
//   );
// }

// esse código acima não tem muita usabilidade, definir o localStorageProduto em toda renderização do componente não trará problemas de desempenho, porque é um código rápido em termos de leitura.

// exemplo 2: código extenso para ser lido:

// sem useMemo():

// const App = ()=>{
//   const [contar, setContar] = React.useState(0)

//   function operacaoLenta() {
//     let c
//     for(let i = 0; i < 10000000; i++) {
//       c = i + i/10
//     }
//     return c
//   }
  
//   const tempo1 = performance.now()

//   operacaoLenta()

//   console.log(performance.now() - tempo1)

//   return <button onClick={()=> setContar(contar + 1)}>{contar}</button>

// }

// com useMemo():

// const App = ()=>{
//   const [contar, setContar] = React.useState(0)

//   function operacaoLenta() {
//     let c
//     for(let i = 0; i < 10000000; i++) {
//       c = i + i/10
//     }
//     return c
//   }
  
//   const tempo1 = performance.now()

//   const valorC = React.useMemo(()=>operacaoLenta(), [])

//   console.log(performance.now() - tempo1)
//   console.log(valorC)

//   return <button onClick={()=> setContar(contar + 1)}>{contar}</button>

// }

// React.useCallback():

// Dificilmente esse método será útil.

// const App = ()=>{
//   const [contar, setContar] = React.useState(0)

//   const handleClick = React.useCallback(()=>{
//     setContar((contar)=> contar + 1)
//   }, [])

//   return <button onClick={handleClick}>{contar}</button>
// }

// Para entender:

// sem useCallback():

// const handleClick = ()=>{
//   setContar(contar + 1)
// }
// nesse caso TODA VEZ que o componente é renderizado, a função é criada.

// com useCallback():

// const handleClick = React.useCallback(()=>{
//    setContar((contar)=> contar + 1)
// }, [])

// dessa vez, cria apenas UMA VEZ a função.

// Para provarmos isso, podemos fazer o seguinte código:

// antes do código, deve-se entender que new Set() é como se criasse uma nova array, porém essa array possui um comportamento diferente, ela adiciona itens unicamente, mesmo que sejam itens iguais.

// código:

const set1 = new Set()
const set2 = new Set()

const Produto = ()=>{
  
  const func1 = ()=>{
    console.log('Teste')
  }

  const func2 = React.useCallback(()=>{
    console.log('Teste')
  }, [])

  set1.add(func1)
  set2.add(func2)

  console.log('Set 1: ', set1)
  console.log('Set 2: ', set2)

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  )
}

const App = ()=>{
  const [contar, setContar] = React.useState(0)

  return (
    <div>
      <Produto />
      <button onClick={()=> setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

// Então, assim como foi dito, toda vez que o componente é renderizado
// a função pura, que não utiliza o useCallback com [], será recriada novamente.

// Porém, isso não trás problemas de desempenho, pois o JavaScript é inteligente o suficiente
// para lidar com isso. Então possui uma funcionalidade chamada GARBAGE COLLECTOR, que é justamente para
// limpar essas funções que estão na memória e não serão utilizadas.

export default App;


