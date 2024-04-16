import React from 'react'

const Radio = ({ list, value, setValue, title }) => {
  return (
    <>
    <h2>{title}:</h2>
    {list.map((item)=> (
        <label key={item}>
            <input 
                type="radio" 
                value={item}
                onChange={({ target })=>setValue(target.value)}
                checked={value === item}
                />
            {item}
      </label>
    ))}
    </>
    
  )
}

export default Radio
