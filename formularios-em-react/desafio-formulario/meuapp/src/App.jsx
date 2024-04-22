import React from 'react'
import Pergunta from './Form/Pergunta'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


const App = ()=> {
  const [alternativaAtual, setAlternativaAtual] = React.useState(null)
  const [acertos, setAcertos] = React.useState(0)
  const [indexPergunta, setIndexPergunta] = React.useState(0)
  const [screen, setScreen] = React.useState('pergunta')
  const [error, setError] = React.useState(null)

  function enviarFormulario(event) {
    event.preventDefault()
    verificarAcerto()
    if(validateRadio()){
      proximaPergunta()
      setAlternativaAtual(null)
    } else {
      setError('Preencha uma alternativa.')
    }
  }

  function verificarAcerto() {
    if(alternativaAtual === perguntas[indexPergunta].resposta){
      setAcertos(acertos + 1)
    }

  }

  function proximaPergunta() {
    atualizarIndexPergunta()
    if(indexPergunta === perguntas.length - 1) {
      setScreen('resultado')
    }
  }

  function atualizarIndexPergunta() {
    console.log(perguntas.length)
    if(indexPergunta < perguntas.length - 1) {
      setIndexPergunta(indexPergunta + 1)
    }
  }

  function validateRadio() {
    if(alternativaAtual) {
      return true
    } else {
      return false 
    }
  }

  function onChange({ target }) {
    setAlternativaAtual(target.value)
    setError(null)
  }

  if(screen === 'pergunta') return (
    <form onSubmit={enviarFormulario}>
      <Pergunta 
        perguntas={perguntas}
        indexPergunta={indexPergunta} 
        value={alternativaAtual}
        setValue={setAlternativaAtual} 
        onChange={onChange}
      />
      {error && <p>{error}</p>}
     <button style={{display: 'block'}}>Próximo</button>
    </form>
  )
  if(screen === 'resultado') return (
    <p>Você acertou {acertos} de {perguntas.length}</p>
  )
}

export default App;
