import React from 'react';
import { Link } from 'react-router-dom';

const NaviBar = () => {

  return (
    <div>
      <Link to='/foxy-quoter' className='foxyQuoter'>Foxy Quoter</Link>
      <Link to='/quotie-foxes' className='foxyStash'>Foxy Stash</Link>
      {/* <div>
        <img className='logo' src={foxyquoteslogo} alt='Foxy Quotes Logo'/>
      </div> */}
    </div>
  )
}

export default NaviBar;