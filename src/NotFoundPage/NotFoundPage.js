import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import PageNotFound from '../Assets/PageNotFound.png';
import FoxyLogoOrange from '../Assets/FoxyLogoOrange.png';

const NotFoundPage = () => {
  return (
    <section className='not-found-page'>
      <div className='lost-message-box'>
        <img className='lost-logo' src={FoxyLogoOrange}/>
        <p className='lost-p-one'>The 2 dimensional fox ponders... <br/> Are you lost?</p>
        <img className='lost-image' src={PageNotFound}/>
        <Link to="/foxy-quoter" className='lost-link'>Go back to Foxy Quotes</Link>
      </div>
    </section>
  )
}

export default NotFoundPage;