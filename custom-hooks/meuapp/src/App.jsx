import React from 'react'
// import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';

// Custom Hooks:

// .useLocalStorage:

// const App =()=> {
  
//   const [produto, setProduto] = useLocalStorage('produto', '')

//   function handleClick({ target }) {
//     setProduto(target.innerText)
//   }

//   return (
//     <div>
//       <p> Produto preferido: {produto}</p>
//       <button onClick={handleClick}>Notebook</button>
//       <button onClick={handleClick}>Smartphone</button>
//     </div>
//   );
// }

// .useFetch:

const App =()=> {
  
  const { data, error, loading, request } = useFetch()
  
  React.useEffect(()=>{
    async function fetchData(){
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/',
      )
      console.log(response, json)
    }
    fetchData()
  }, [request])
  console.log(data)

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando...</p>
  if(data) return (
    <>
    {
      data.map((produto)=>(
        <p key={produto.id}>{produto.nome}</p>
      ))
    }
    </>
  )
  else return null
}

export default App;
