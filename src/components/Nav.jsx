import React from 'react'
import menu from '../assets/menu.png'
import '../styles/nav.css'

function Nav({navOpen, setNavOpen}) {

  const openNav = () => {
    setNavOpen(!navOpen)
  }

  const openStyle = {
    transform: 'rotate(270deg)',
    left: '40vw'
  }

  const closedStyle = {
    transform: 'rotate(90deg)',
    left: '0vw'
  }

  const closedNav = {
    width: '0vw',
  }
  const openNavStyle = {
    width: '43vw',
  }

  return (
    <nav style={navOpen ? openNavStyle : closedNav}>
      <div style={navOpen ? openStyle : closedStyle} onClick={openNav} className='open-nav-button'>▲</div>
    </nav>
  )
}

export default Nav