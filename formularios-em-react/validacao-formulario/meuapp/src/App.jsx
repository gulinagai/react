import React from 'react'
import Input from './Form/Input';

// Validação de formulário:

// O melhor momnto para validar o formulário é no onBlur.

// Existem 3 momentos que são importantes de realizarmos validação.

// 1º: no onBlur.
// 2º: validar a cada change, mas só depois do primeiro erro.
// 3º: validar ao enviar o formulário (onSubmit)

const App = ()=> {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    if(validateCEP(cep)){
      console.log('Enviar')
    } else {
      console.log('Não enviar')
    }
  }

  function validateCEP(cep) {
    if(cep.length === 0) {
      setError('Preencha um valor')
      return false
    } else if(!/^\d{5}-?\d{3}$/.test(cep)) {
      setError('Preencha um CEP válido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({ target }) {
    console.log(target.value)
    validateCEP(target.value)
  }

  function handleChange({ target }) {
    if(error) validateCEP(target.value)
    setCep(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{cep}</p>
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
}

export default App;
