import React from 'react'
import Head from './Head'
import { Helmet } from 'react-helmet'

const Sobre = () => {
  return (
    <div>

      <Head title="Sobre" description="Esse é o Sobre."/>

      {/* <Helmet>
        <title>Dogs | Sobre</title> 
        <meta name="description" content="Esse é o Sobre."/>
      </Helmet> */}

      <h1>Sobre</h1>
      <p>Sobre da empresa.</p>
    </div>
  )
}

export default Sobre
