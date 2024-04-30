import React from 'react'
import imgDog from './img/dog.jpg'

// Imagens em React:

// Forma correta: Importa a imagem, dê um nome a importação e utilize-a no componente. Não utilize a url diretamente no src.

// const App = () =>{
//   return (
//     <div>
//       <img src={imgDog} alt="Dog" />
//     </div>
//   )
 
// }

// imagens SVG:

// Posso importar da mesma forma,
// ou utilizar o ReactComponent
// ou criar um Componente para o svg:

import dogsvg from './img/dogsvg.svg'

// const App = () =>{
//   return (
//     <div>
//       <img style={{width: '200px'}}src={dogsvg} alt="Dog" />
//     </div>
//   )
 
// }

import { ReactComponent } from './img/dogsvg.svg'

// const App = () =>{
//   return (
//       <ReactComponent style={{width: '200px', height: '200px'}}/>
//   )
 
// }

// ou criando um componente,
// e criando um componente, posso manipular as props:

import DogSvg from './DogSvg'

const App = () =>{
  return (
    <>
      <DogSvg
        cor="#84e"
      />
    </>
  )
 
}

 export default App;

