import React from 'react'

// const App = () => {
//   function handleClick(event) {
//     alert(`Comprou ${event.target.innerText}`)
//   }
//   return (
//     <>
//      <button onClick={handleClick}>Camisa</button>
//      <button onClick={handleClick}>Short</button>
//     </>
 
//   )
// }

// Função Anônima no evento:

// const App = () => {
//   return <button onClick={({ target }) => target.classList.toggle('ativo')}>Ativar</button>
// }


// Adicionar eventos ao document/body/window:

const App = () =>{
  function handleScroll(event) {
    console.log(event)
  }
  window.addEventListener('scroll', handleScroll)
  return <div style={{height: '200vw'}}>div</div>
}

 export default App;

