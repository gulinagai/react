import React from 'react'
import Modal from './Modal'
import ButtonModal from './ButtonModal'


// Hooks:

// Existem diversos hooks, e todos eles se encontram 
// dentro do objeto React, useState() é um deles.

// Antes de entender os Hooks(useState por exemplo) devemos entender o que é um estado.

// O estado de um site representa as características dela naquele momento.

// Estado:

// const App = ()=> {
//   const ativo = true // Isso é um estado, ativo se encontra como true
//   return <button>{ativo ? 'Ativo' : 'Inativo'}</button>
// }

// Com JS puro, o estado era controlado por classes, mas isso é muito limitado, para isso, com React, o estado é controlado com o .useState()

// Exemplo:

// Objetivo: Fazer com que um botão atualize sem conteúdo interno de acordo com a variável ativo.

// Código sem hook():

// const App = ()=>{
//   let ativo = true
//   const handleClick = ()=>{
//     ativo = !ativo
//     console.log(ativo)
//     return ativo
//   }
//   return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
// }
// sim, a variável muda o valor, mas o botão não é atualizado com o novo conteúdo

// Código com hook(.useState()):

// React.useState():

// const App = ()=>{
  // Desestruturando o array retornado de React.useState()(ou seja, colocando os valores em variáveis separadamente).
//   const [ativo, setAtivo] = React.useState(true)
//   const handleClick = ()=>{
//     return setAtivo(!ativo)
//   }
//   return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
// }

// Múltiplos estados:

// Não existe limites para o uso do useState, podemos definir diversos no mesmo componente.

// const App = ()=>{
//   const [contar, setContar] = React.useState(0)
//   const [ativo, setAtivo] = React.useState(false)
//   const [dados, setDados] = React.useState({nome: 'Guli', idade: 24})
  
//   const handleClick = ()=>{
//     setAtivo(!ativo)
//     setContar(contar + 2)
//     setDados({...dados, faculdade: 'Possui faculdade'})
//   }

//   return (
//   <div>
//     <p>{contar} + 2 = {contar + 2}</p>
//     <p>{dados.nome}</p>
//     <p>{dados.idade}</p>
//     <p>{dados.faculdade}</p>
//     <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
//   </div>
//   )
// }

// Props e .useState():

// const App = ()=> {
//   const [modal, setModal] = React.useState(false)
//   return (
//     <> 
//       <Modal modal={modal} setModal={setModal}/>
//       <ButtonModal setModal={setModal}/>
//     </>
//   )
// }

// Reatividade:

// const App = ()=> {
//   const [items, setItems] = React.useState(['Item 1', 'Item 2'])

//   const handleClickNaoReativo = ()=>{
//     // Forma errada: 
//     items.push('Item 3')
//     console.log(items)
//   }

//   const handleClickReativo = ()=>{
//     // Forma certa:
//     setItems([...items, 'Item 3'])
//   }

//   return (
//     <>
//     <ul>
//        {items.map((item, index)=>(
//        <li key={index}>{item}</li> 
//       ))}
//     </ul>
//     <button style={{display: 'block', margin: '0px 0px 20px 0px'}}  onClick={handleClickNaoReativo}>Adicionar Item Não Reativo</button>
//     <button onClick={handleClickReativo}>Adicionar Item Reativo</button>
//     </>
//   )
// }

// Callback (setNome(callback) e no useState(callback)):

// setNome(callback):

// const App = ()=>{
//   const [ativo, setAtivo] = React.useState(false)
//   function handleClick() { 
//     // o nome do parâmetro de setAtivo não importa, sempre se referirá ao valor anterior do estado antes da sua modificação.
//     setAtivo((anterior)=> !anterior)
//   }

//   return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
// }

// React.useState(callback):

// const App = ()=>{
//   // window.localStorage.ativo = true
//   const [ativo, setAtivo] = React.useState(()=>{
//     const ativo = window.localStorage.getItem('ativo')
//     console.log(ativo)
//     return ativo
//   })
//   const handleClick = ()=>{
//     setAtivo(!ativo)
//   }

//   return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
// }

// React.strictMode:
// O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim, é possível identificarmos funções com efeitos colaterais(side effects) e eliminar essas side effects.

// Função com side effect: Função que modificam estados que estão fora da mesma.

const App = ()=>{
  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(['Item 1'])
  
  const handleClick = ()=>{
    setContar((contar)=>{
      //setContar possui uma side effect(Efeito colateral)
      return contar + 1
    })
    setItems((items)=> [...items, 'Item ' + (contar + 1)])
  }

  return (
    <>
      {items.map((item)=>(
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  )
}

export default App;

