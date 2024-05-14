import React from 'react'

// useReducer():

// useReducer() é um hook utilizado para quando temos muitas diversas funções atualizadoras para um mesmo estado. É uma forma de deixar tudo mais organizado.

// Sem useReducer:

// function App() {

//   const [contar, setContar] = React.useState(0)

//   function adicionarUm() {
//     setContar(contar + 1)
//   }

//   function subtrairUm() {
//     setContar(contar - 1)
//   }

//   function adicionarCinco() {
//     setContar(contar + 5)
//   }

//   function subtrairCinco() {
//     setContar(contar - 5)
//   }

//   return (
//     <>
//       <p>{contar}</p>
//       <button onClick={adicionarUm}>Adicionar um</button>
//       <button onClick={subtrairUm}>Subtrair um</button>
//       <button onClick={adicionarCinco}>Adicionar cinco</button>
//       <button onClick={subtrairCinco}>Subtrair cinco</button>
//     </>
//   );
// }

// export default App;

// com useReducer():

// function reducer(contar, action) {
//   switch(action) {
//     case "adicionarUm":
//       return contar + 1
//     case "subtrairUm":
//       return contar - 1
//     case "adicionarCinco":
//       return contar + 5
//     case "subtrairCinco":
//       return contar - 5
//     default:
//       throw new Error('Action passada não existe')
//   }
// }

// function App() {

//   const [contar, dispatch] = React.useReducer(reducer, 0)


//   return (
//     <>
//       <p>{contar}</p>
//       <button onClick={()=> dispatch("adicionarUm")}>Adicionar um</button>
//       <button onClick={()=> dispatch("subtrairUm")}>Subtrair um</button>
//       <button onClick={()=> dispatch("adicionarCinco")}>Adicionar cinco</button>
//       <button onClick={()=> dispatch("subtrairCinco")}>Subtrair cinco</button>
//     </>
//   );
// }

// export default App

// outro exemplo mais complexo:

// passando um objeto como argumento no dispatch. O que era action agora será action.type, e o action.content será utilizado para modificar o estado de alguma forma:


function reducer(frutas, action) {
  console.log([...frutas])
  switch(action.type) {
    case "adicionar":
      return [...frutas, action.content] 
    case "remover":
      return frutas.filter((fruta)=> fruta !== action.content)
    default:    
      throw new Error('Action passada não existe')
  }
}

function App() {

  const [frutas, dispatch] = React.useReducer(reducer, ["Banana", "Maçã", "Acerola"])


  return (
    <>
      <p>{frutas.map((fruta, index)=> {
        if(index !== frutas.length - 1) {
          return fruta + ', '
        } else return fruta
      })}</p>
      <button onClick={()=> dispatch({type: "adicionar", content: "Uva"})}>Adicionar Uva</button>
      <button onClick={()=> dispatch({type: "remover", content: "Banana"})}>Remover Banana</button>
    </>
  );
}

export default App
