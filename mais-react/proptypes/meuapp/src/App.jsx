import React from 'react'
import Button from './Button';

// PropTypes:

function App() {

  return (
    <>
      <Button
        // width={100}
        // Erro no console

        // sem passar nada usa o que está em Button.defaultProps
      >
        Clique aqui
      </Button>
    </>
  );
}

export default App;
