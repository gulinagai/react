import React, { useLayoutEffect } from 'react'

// Array na tela:

// const App = () =>{
//     const produtos = ['Notebook', 'Smartwatch', 'Tablet']
//     return <div>{produtos}</div>
// }

// Todo elemento html precisa de uma key:
// const App = () =>{
//   const empresas = [<li key="a">Santander</li>, <li key="b">Google</li>]
//     return <ul>{empresas}</ul>
// }


// Map para retornar 1 elemento para cada item da Array:

// const App = () =>{
//    const filmes = ['Before Sunset', 'Before Sunrise', 'Before Midnight']
//    return (
//     <ul>
//         {filmes.map((filme)=> (
//           <li key={filme}>{filme}</li>
//         ))}
//     </ul>
//    )
// }

// Array de Objetos(mais comum do dia-a-dia):

const App = () => {
    const livros = [
        {nome: 'A Game of Thrones', ano: 1996 },
        {nome: 'A Clash of kings', ano: 1998 },
        {nome: 'A Storm of Swords', ano: 2000 }
    ]
    return (
        <ul>
            {livros
            .filter(({ano})=> ano >= 1998)
            .map(({nome, ano})=> (
            <li key={nome}>{nome}, {ano}</li>
            ))}
        </ul>
    )
}

export default App