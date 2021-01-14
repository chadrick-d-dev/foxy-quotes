import React from 'react';
import { Link } from 'react-router-dom';

const NaviBar = () => {

  return (
    <div>
      <Link label='Foxy Quoter' path='/foxy-quoter'/>
      <Link label='Foxy Stash' path='/quotie-foxes'/>
      <div>
        <img className='logo' src={foxyquoteslogo} alt='Foxy Quotes Logo'/>
      </div>
    </div>
  )
}

export default NaviBar;