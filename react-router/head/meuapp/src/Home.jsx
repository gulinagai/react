import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import Head from './Head'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      
      <Head title="Home" description="Esse é o Home."/>

      {/* <Helmet>
        <title>Dogs | Home</title> 
        <meta name="description" content="Esse é o Home."/>
      </Helmet> */}


      <h1>Home</h1>
      <p>Essa é a Home.</p>
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>{' '}
      <Login/>
    </div>
  )
}

export default Home
