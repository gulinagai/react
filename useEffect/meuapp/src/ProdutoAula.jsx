import React from 'react'

const Produto = () => {
    React.useEffect(()=> {
        function handleClick(event){
            console.log(event)
        }
        window.addEventListener('scroll', handleClick)
        return ()=>{
            window.removeEventListener('scroll', handleClick)
        }
        // Esse é o retorno que deve ser colocado caso se queira acionar algum efeito quando o componente for desfeito, desrenderizado.
    }, [])
  return (
    <p style={{height: '200vh'}}>Produto</p>
  )
}

export default Produto
