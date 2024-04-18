import React from 'react'

const Input = ({ type, label, id, value, onChange, ...props}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  )
}

export default Input
