import React from 'react'

// Input type checkbox em React:

// 1 input checkbox: 

// function App() {
//   const [termos, setTermos] = React.useState(false)

//   return (
//     <form>
//       <label>
//         <input type="checkbox"
//                value="termo"
//                onChange={({ target })=> setTermos(target.checked)}
//         />
//       Aceito e concordo com os termos.
//       </label>
//       {termos && <p>Termos aceitos.</p>}
//     </form>
//   );
// }

// Múltiplos inputs checkbox:

// Exercicio professor: 

//// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

function App() {
  const [cores, setCores] = React.useState([])

  function handleClick({ target }){
    if(target.checked){
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor)=>{
        return cor !== target.value
      }))
    }
  }

  return (
    <form>
      <h1>Escolha as cores que vc gosta:</h1>

      {coresArray.map((cor)=> (
        <label key={cor}>
        <input type="checkbox"
               value={cor}
               onChange={handleClick}
               checked={cores.includes(cor)}
        />
      {cor.replace(/(\w{1})(\w+)/,(tudo, primeiraLetra, restoDaPalavra)=>{
        return primeiraLetra.toUpperCase() + restoDaPalavra
      })}
      </label>
      ))}

      {cores && <p>{cores + " "}</p>}
    </form>
  );
}


export default App;
