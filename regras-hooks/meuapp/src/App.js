import React from 'react'

// Regras para Hooks:

// Top level:
// Não utilize os hooks dentro de funções, loops ou condicionais.

function App() {

  // Forma correta:
  React.useEffect(()=>{
    document.title = 'Titulo novo'
  }, [])

  // Formas erradas:

  // let condicao = true

  // if(condicao) {
  //   React.useEffect(()=>{
  //     document.title = 'Titulo Novo'
  //   })
  // }

  // function mudarTitulo() {
  //   React.useEffect(()=>{
  //     document.title = 'Titulo novo'
  //   }, [])
  // }

  // for (let i = 0; i < 10; i++) {
  //   React.useEffect(()=>{
  //     document.title = 'Titulo novo'
  //   }, [])
  // }

  useNumeroAleatorio()
  return (
    <div>
      oi
    </div>
  );
}

// Hooks apenas em Componentes e Custom Hooks:
// function numeroAleatorio é errado. Podemos usar:
  function useNumeroAleatorio() {
    const numero = Math.random()
    React.useEffect(()=>{
      document.title = numero
    }, [numero])
    return numero
  }

export default App;
