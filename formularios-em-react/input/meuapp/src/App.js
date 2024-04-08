import React from 'react'

// Formulário em React:

// Input: (Reatividade no Input)

// function App() {
//   const [nome, setNome] = React.useState('')

//   return (
//     <form>
//       <label htmlFor="nome">Nome:</label>
//       <input type="text" id="nome" value={nome} onChange={(event)=> setNome(event.target.value)}></input>
//       <p>{nome}</p>
//     </form>
//   );
// }

// onSubmit no <form> (controla o que acontece ao enviar o mesmo.):

// function App() {
//   const [nome, setNome] = React.useState('')

//   function handleSubmit(event) {
//     event.preventDefault()
//     console.log(event)
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nome">Nome:</label>
//         <input type="text" id="nome" value={nome} onChange={(event)=> setNome(event.target.value)}></input>
//         <button>Enviar</button>
//       </form>
//         <p>{nome}</p>
//     </>
//   );
// }

// Múltiplos inputs para múltiplos estados:

// function App() {
//   const [nome, setNome] = React.useState('')
//   const [email, setEmail] = React.useState('')

//   function handleSubmit(event) {
//     event.preventDefault()
//     console.log(event)
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nome">Nome:</label>
//         <input type="text" id="nome" value={nome} onChange={(event)=> setNome(event.target.value)}></input>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(event)=> setEmail(event.target.value)}></input>
//         <button>Enviar</button>
//       </form>
//         <p>{nome}</p>
//         <p>{email}</p>
//     </>
//   );
// }

// Multiplos inputs para um estado que é um objeto contendo propriedades com valores reativos: (É uma forma mais complexa de fazer a mesma coisa do que mostrado anteriormente)

function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  function handleChange( {target} ) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }
  console.log(form)

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" value={form.nome} onChange={handleChange}></input>
        
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={form.email} onChange={handleChange}></input>
        
        <button>Enviar</button>
      
      </form>
        <p>{form.nome}</p>
        <p>{form.email}</p>
    </>
  );
}



export default App;
