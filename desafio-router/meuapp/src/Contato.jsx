import React from 'react'
import fotoContato from './img/contato.jpg'
import './Contato.css'

const Contato = () => {
  return (
    <div className="contatoContainer">
      <img src={fotoContato} alt="" />
      <div className="detalhesContato">
        <h2>Entre em contato.</h2>
        <ul>
          <li>guli@hotmail.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </div>
  )
}

export default Contato
