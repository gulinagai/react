import React from 'react'

const Input = ({ type, id, label, placeholder, value, onChange, onBlur, error }) => {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input 
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </>
  )
}

export default Input
