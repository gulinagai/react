import React from 'react'

const Input = ({ label, value, setValue, type }) => {
  return (
    <>
     <label>{label}</label>
    <input 
        type={type}
        value={value}
        onChange={({ target })=> setValue(target.value)}
    />
    </>
  )
}

export default Input
