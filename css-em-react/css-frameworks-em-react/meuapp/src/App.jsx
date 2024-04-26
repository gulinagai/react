import React from 'react'

// CSS Frameworks em React:

// Podemos adicionar qualquer framework de CSS ao React.

// Exemplo: BootStrap.
// 1º passo: npm install bootstrap@5.3.3

// 2ºpasso: importar no index.js

// Pronto, o bootstrap já pode ser utilizado:

// O BootStrap concede classes prontas para serem usadas:

// function App() {
//   return (
//     <div className="card bg-dark text-white m-5" style={{maxWidth: '18rem'}}>
//       <div className="card-header">Notebook</div>
//       <div className="card-body">
//         <h5 className="card-title">R$ 2500</h5>
//         <p className="card-text">Este é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.</p>
//       </div>
//     </div>
//   );
// }

// Existe uma outra forma de fazer a mesma coisa, porém de uma forma diferente:

// Existe o React-BootStrap, que basicamente é o bootstrap só que utililzado como componentes.

// O React-BootStrap concede componentes prontos para serem usados, lugar de classes prontas:

// React-BootStrap:

// 1º passo: npm install react-bootstrap bootstrap
//  (o bootstrap só em caso de não estar instalado)

// Já pode fazer uso:

// primeiro precisa importar o componente que se quer utilizar: nesse caso será o Card.

// depois é só utilizá-lo no return.

// as classes se tornarão prop=value, nem todas são válidas, como por exemplo:

// className="bg-dark" se tornará bg="dark"

// nem todas são válidas, mas o className pode normalmente ser utililzado caso isso aconteça, assim como também o style pode ser utilizado.

import Card from 'react-bootstrap/Card'

const App = ()=>{

  return (
    <>
     <Card bg="dark" text="white" className="m-5" style={{maxWidth: '18rem'}}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Este é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </Card.Text>
      </Card.Body>
    </Card>

    {/* Forma Antiga: */}
    
    <div className="card bg-dark text-white m-5" style={{maxWidth: '18rem'}}>
       <div className="card-header">Notebook</div>
       <div className="card-body">
         <h5 className="card-title">R$ 2500</h5>
         <p className="card-text">Este é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.</p>
       </div>
     </div>
    </>
   
  )
}

export default App;
