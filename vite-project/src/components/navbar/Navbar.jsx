import React from 'react'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import "../../styles/components/navbar/Navbar.css"
export default function Navbar() {
  return (
    <nav className='navbar'>
        <Logo/>
        <Menu/>
    </nav>
  )
}
