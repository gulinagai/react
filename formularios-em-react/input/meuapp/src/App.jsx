import React from 'react'

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
//  fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    // form é o objeto com os dados do formulário
//    body: JSON.stringify(form),
//  });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva


function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '', 
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  const [mensagem, setMensagem] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then((response)=>{
      console.log(response.ok)
      if(response.ok === true) {
        setMensagem('Formulário Enviado')
      } 
    })
  }

  function handleChange({ target }) {
    const {id, value} = target
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  }

  function typeVerification({ tipoInputAlvo }) {
    if(tipoInputAlvo === 'email') return 'email'
    if(tipoInputAlvo === 'senha') return 'password'
    return 'text'
  }

  console.log(form)

  return (
    <>
    <form onSubmit={handleSubmit}>
      
      {
        Object.entries(form).map(( [chave, valor] )=>(
          <React.Fragment key={chave}>
          <label htmlFor={chave}>
           
            {chave.replace(/(\w{1})(\w+)/g, (match, primeiraLetra, restoDaPalavra)=> primeiraLetra.toUpperCase() + restoDaPalavra)}
         
          {/* Comentário: match é o primeiro argumento do método .replace, e ele representa todo o regexp, os sequentes são os grupos de captura. */}
          
            </label>
          <input 
            id={chave} 
            type={typeVerification({ tipoInputAlvo: chave })} 
            value={valor}
            onChange={handleChange}
            />
          </React.Fragment>
        ))
      }

      <button type="submit">Enviar</button>
    </form>
    {
      mensagem && (
        <p>{mensagem}</p>
      )
    }
    </>
    
  );
}



export default App;
