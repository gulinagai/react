import React from 'react'

const Input = ({label, id, ...props/*isso é Rest*/}) => {
    console.log({...props})
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props}/*isso é Spread*//>
    </div>
  )
}

export default Input
