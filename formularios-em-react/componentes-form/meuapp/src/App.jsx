import React from 'react'
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

function App() {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [fruitSelected, setFruitSelected] = React.useState('')
  const [fruitRadio, setFruitRadio] = React.useState('')
  const [gamesRadio, setGamesRadio] = React.useState('')
  const [linguagens, setLinguagens] = React.useState([])
  const [termos, setTermos] = React.useState([])

  return (
    <form>
      
      <Input label="Nome" type="text" value={nome} setValue={setNome}/>
      <Input label="Email" type="email" value={email} setValue={setEmail}/>


      <Select options={['Melancia', 'Laranja', 'Maçã']} value={fruitSelected} setValue={setFruitSelected}/>

      <Radio list={['Melancia', 'Laranja', 'Maçã']} value={fruitRadio} setValue={setFruitRadio} title="Frutas"/>
      <Radio list={['LOL', 'GC', 'CS']} value={gamesRadio} setValue={setGamesRadio} title="Games"/>

      <Checkbox list={['JavaScript', 'PHP', 'Python', 'C++']} value={linguagens} setValue={setLinguagens} title="Linguagens de Programação"/>

      <Checkbox list={['Aceito e concordo com os termos.']} value={termos} setValue={setTermos} title="Termos de Contrato"/>

      <button>Enviar</button>
      <p>{nome}</p>
      <p>{email}</p>
      <p>{fruitSelected}</p>
      <p>{fruitRadio}</p>
      <p>{gamesRadio}</p>
      <p>{linguagens}</p>
      <p>{termos}</p>
    </form>
  );
}

export default App;
