import React from 'react'

// Input type radio:

// Existem 2 formas de de indicar ao grupos de inputs radio
// que apenas um é selecionável: pelo name, e fazendo uma comparação no atributo checked(que vai retornar true ou false)

function App() {
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  return (
    <form>
      <h1>Produtos:</h1>
      <label>
        <input 
        type="radio"
        value="notebook"
        onChange={({ target })=>setProduto(target.value)}
        name="produtos" 
        />
        Notebook
      </label>
      <label>
        <input 
        type="radio" 
        value="smartphone"
        onChange={({ target })=>setProduto(target.value)}
        name="produtos" 
        />
        Smartphone
      </label>
      <p>{produto}</p>
      <h1>Cores:</h1>
      <label>
        <input 
        type="radio"
        value="vermelho"
        onChange={({ target })=>setCor(target.value)}
        checked={cor === 'vermelho'} 
        />
        Vermelho
      </label>
      <label>
        <input 
        type="radio" 
        value="roxo"
        onChange={({ target })=>setCor(target.value)}
        checked={cor === 'roxo'} 
        />
        Roxo
      </label>
      <p>{cor}</p>
    </form>
  );
}

export default App;
