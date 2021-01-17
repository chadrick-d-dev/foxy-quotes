import React from 'react';
import { Link } from 'react-router-dom';
import './NaviBar.css';
import FoxyLogo from '../Assets/FoxyLogo.png';
const NaviBar = () => {

  return (
    <section className='navi-bar'>
      <Link to='/foxy-quoter' className='saved-link'>Foxy Quoter</Link>
      <Link to='/quotie-foxes' className='creation-link'>Foxy Stash</Link>
      <img className='logo' src={FoxyLogo} alt='Foxy Quotes Logo'/>
    </section>
  )
}

export default NaviBar;