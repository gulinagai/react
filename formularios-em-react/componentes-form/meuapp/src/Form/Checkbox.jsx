import React from 'react'

const Checkbox = ({ list, title, value, setValue }) => {
    
    function handleChange({ target }) {
        if(target.checked) {
            setValue([...value, target.value])
        } else {
            setValue(value.filter((itemArray)=> itemArray !== target.value))
        }
    }

  return (
    <>
    <h2>{title}:</h2>
        {list.map((item)=>(
            <label key={item}>
                <input 
                    type="checkbox" 
                    value={item}
                    onChange={handleChange}
                    checked={value.includes(item)}
                />
                {item}
            </label>
        ))}
    </>
  )
}

export default Checkbox
