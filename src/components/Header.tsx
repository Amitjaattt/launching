import Logo from './Logo'
import React from 'react'
import Nav from './Nav'
const Header = () => {
  return (
    <header className=' bg-white sticky top-0 z-[20]  flex w-full  items-center flex-wrap  border-teal-100 p-8 '>
        <Logo/>
        <Nav />
        </header>
  )
}

export default Header;