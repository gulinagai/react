import React from 'react'

const Modal = ({modal, setModal}) => {
  if(modal) {
    return (
        <>
        <div>
          Esse é um modal.
        </div>
        <button onClick={()=>setModal(false)}>Fechar Modal</button>
        </>  
      )
  } else {
    return null
  }
 
}

export default Modal
