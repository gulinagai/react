import React from 'react'

const Pergunta = ({ perguntas, indexPergunta, value, setValue, onChange }) => {
  return (
    <fieldset>
    <legend>{perguntas[indexPergunta].pergunta} </legend>
    
       
       {perguntas[indexPergunta].options.map((alternativa)=>(
        <label key={alternativa}>
          
        <input
          key={alternativa}
          type="radio"
          value={alternativa}
          checked={value === alternativa}
          onChange={onChange}
        />
        {alternativa}
        </label>
       ))} 
    
    </fieldset>
    
  )
}

export default Pergunta
