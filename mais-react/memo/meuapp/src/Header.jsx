import React from 'react'

const Header = () => {
    console.log('renderizou header')
  return (
    <header>Header fixo</header>
  )
}

export default React.memo(Header)
