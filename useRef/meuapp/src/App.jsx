import React from 'react'

// React.useRef():

// retorna um objeto, que possui a propriedade current.

// .useRef() para referência a elementos do DOM:

// function App() {
//   const divRef = React.useRef()
//    React.useEffect(()=>{
//      console.log(divRef.current)
//    })
//   // console.log(divRef.current) // retorna undefined se não tiver dentro de useEffect(), pq sem nada, ele é executado antes de renderizar o componente, e não terá referência
//   return (
//     <div ref={divRef}>
//      div teste
//     </div>
//   );
// }



// exemplo de useRef() em formulário:

// obs: método .focus() trás o foco a aquele elemento DOM.

// function App() {
//   const [comentarios, setComentarios] = React.useState([])
//   const [input, setInput] = React.useState('')
//   const inputElement = React.useRef()

//   function handleClick() {
//     setComentarios([...comentarios, input])
//     setInput('')
//     inputElement.current.focus() // Deixa o foco no campo input
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map((comentario)=>(
//           <li key={comentario}>{comentario}</li>
//         ))}
//       </ul>
//       <input 
//         type="text"
//         ref={inputElement}
//         value={input}
//         onChange={({ target })=> setInput(target.value)}
//       />
//       <br/>
//       <button onClick={handleClick}>Enviar</button>
//     </div>
//   );
// }


// outras referências:

// no setTimeout por exemplo:

// exemplo de aplicação para adicionar uma notificação de adicionado ao carrinho quando o usuário clicar:

function App() {
  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()

 

  function handleClick() {
    clearTimeout(timeoutRef.current)
    setNotificacao('Item adicionado ao carrinho!')
    setCarrinho(carrinho + 1)
    timeoutRef.current = setTimeout(()=>{
      setNotificacao(null)
    }, 2000)
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{carrinho}</button>
    </div>
  );
}

export default App;
