import React from 'react'
const Contato = React.lazy(()=> import('./Contato'))

// Lazy e Suspense:

const App = ()=>{
  const [ativo, setAtivo] = React.useState(false)


  return (
    <>
      {ativo && ( 
       <React.Suspense 
       fallback={<div>Carregando...</div>}>
       <Contato/>
     </React.Suspense>
      )}
    <button onClick={()=> setAtivo(!ativo)}>
      Ativar
    </button>
    </>
  );
}

export default App;
