import React from 'react';
import './GeneratorContainer.css';
import PropTypes from 'prop-types';
import FoxyLogoOrange from '../Assets/FoxyLogoOrange.png';

const GeneratorContainer = ({createFoxyQuote, foxyQuote, saveFoxyQuote}) => {
  if (!foxyQuote) {
    return (
      <section className='load-view'>
        <img className='orange-logo' src={FoxyLogoOrange} alt='Foxy Quotes Logo'/>
        <p className='load-instruction'>Please click on the 'Foxy Me A<br/>Quote Button' to create a Foxy Quote</p>
        <button className='create-button' alt='Foxy Quote create button' onClick={() => createFoxyQuote()}>Foxy Me A Quote!</button>
      </section> 
    )
  } else {
    return (
      <section className='new-quote-view'>
        <p className='new-instructions'>To save a Foxy Quote, click the <br/>'Stash This Trickster' Button.<br/>To create a new Foxy Quote, click<br/>the 'Foxy Me Another!' Button.</p>
        <div className='new-foxy-quote'>
          <img className='new-fox-image' src={foxyQuote.img} alt='Fox'/>
          <div className='fox-quote'>
            <label htmlFor='quote'>Quote:</label>
            <p className='quote'>"{foxyQuote.quote}"</p>
          </div>
          <div className='fox-author'>
            <label htmlFor='name'>Author:</label>
            <p className='author'>{foxyQuote.author}</p>
          </div>
          <div className='button-box'>
            <button className='save-button' id={foxyQuote.id} alt='Foxy Quote save button' onClick={saveFoxyQuote}>Stash This Trickster!</button>
            <button className='create-more-button' alt='Foxy Quote create button' onClick={createFoxyQuote}>Foxy Me Another!</button>
          </div>
        </div>
      </section>
    )
  }
}

GeneratorContainer.propTypes = {
  createFoxyQuote: PropTypes.func,
  foxyQuote: PropTypes.object,
  saveFoxyQuote: PropTypes.func
}

export default GeneratorContainer;