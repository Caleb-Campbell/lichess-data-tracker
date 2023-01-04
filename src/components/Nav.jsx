import React from 'react'
import menu from '../assets/menu.png'
import '../styles/nav.css'
import { Link } from 'react-router-dom'

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
{   navOpen &&
        <><div className='navigations'>
          <Link to='/'>Home</Link>
          <Link to='/elo-history'>ELO History</Link>
          <a href='https://lichess.org/'>lichess.org</a>
        </div><div className='credits'>
            <p>Site by Caleb Campbell</p>
          </div></>
}
    </nav>
  )
}

export default Nav