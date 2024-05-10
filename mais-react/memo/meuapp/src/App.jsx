import React from 'react'
import Header from './Header';

// React.memo():

// O componente que for envovido nessa função só será renderizado uma vez, mesmo o componente pai sendo renderizado outras vezes por causa da função atualizadora que está no compoenente pai.

// Isso impede renderizações desnecessárias de componentes que possuem um return fixo, não dependente de estado.

function App() {
  const [contar, setContar] = React.useState(0)
  console.log('renderizou app')
  return (
    <div>
      <Header/>
      <p>{contar}</p>
      <button onClick={()=> setContar(contar + 1)}>Somar</button>
    </div>
  );
}

export default App;
