import React from 'react';
import { Link } from 'react-router-dom';
import './NaviBar.css';
import FoxyLogo from '../Assets/FoxyLogo.png';
const NaviBar = () => {

  return (
    <nav className='navi-bar'>
      <Link to='/foxy-quoter' className='saved-link'>Foxy Quoter</Link>
      <Link to='/foxy-stash' className='creation-link'>Foxy Stash</Link>
      <img className='logo' src={FoxyLogo} alt='Foxy Quotes Logo'/>
    </nav>
  )
}

export default NaviBar;