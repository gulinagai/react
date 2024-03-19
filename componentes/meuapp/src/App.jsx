// Desestruturação no import do webpack:

import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './Form/Form'
import TesteReturn from './TesteReturn'

// Componente:

// a) Componentes gerais:

// const App = ()=> {
//   return (
//   <>
//   <Header/>  
//   <p>Esse é meu site.</p>
//   <Footer/>
//   </>
//   )
// }

// export default App;

// b) Micro Componentes:

const App = ()=> {
  return (
  <Fragment>
  <Header/>
  <Form/>  
  <p>Esse é meu site.</p>
  <TesteReturn/>
  <Footer/>
  </Fragment>
  )
}

export default App;






