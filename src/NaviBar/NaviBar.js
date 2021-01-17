import React from 'react';
import { Link } from 'react-router-dom';

const NaviBar = () => {

  return (
    <section className='navi-bar'>
      <Link to='/foxy-quoter' className='saved-link'>Foxy Quoter</Link>
      <Link to='/quotie-foxes' className='creation-link'>Foxy Stash</Link>
      {/* <div>
        <img className='logo' src={foxyquoteslogo} alt='Foxy Quotes Logo'/>
      </div> */}
    </div>
  )
}

export default NaviBar;