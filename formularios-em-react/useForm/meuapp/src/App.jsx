import React from 'react'
import Input from './Form/Input';
import useForm from './Hooks/useForm';

// Criando um custom hook para validação de formulário(useForm):

function App() {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm()
  const sobrenome = useForm(false)

  function handleSubmit(event) {
    event.preventDefault()
    if(cep.validate()) {
      console.log('Enviar formulário para o banco de dados.')
    } else {
      console.log('Não enviar formulário para o banco de dados.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
       
        <Input type="text" id="cep" label="CEP" placeholder="00000-000" {...cep}/>

        <Input type="email" id="email" label="email" {...email}/>

        <Input type="text" id="nome" label="Nome" {...nome}/>

        <Input type="text" id="sobrenome" label="Sobrenome" {...sobrenome}/>

      <button>Enviar</button>
    </form>
  );
}

export default App;
