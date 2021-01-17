import React from 'react';
import './GeneratorContainer.css';
import PropTypes from 'prop-types';

const GeneratorContainer = ({createFoxyQuote, foxyQuote, saveFoxyQuote}) => {
  if (!foxyQuote) {
    return (
      <section className='load-view'>
        <button className='create-button' alt='Foxy Quote create button' onClick={createFoxyQuote}>Foxy Me A Quote!</button>
      </section> 
    )
  } else {
    return (
      <section className='new-quote-view'>
        <div className='new-foxy-quote'>
          <img className='new-fox-image' src={foxyQuote.img} alt='Fox'/>
          <div className='fox-quote'>
            <label for='quote'>Quote:</label>
            <p className='quote'>{foxyQuote.quote}</p>
          </div>
          <div className='fox-author'>
            <label for='name'>Author:</label>
            <p className='author'>{foxyQuote.author}</p>
          </div>
          <div className='button-box'>
            <button className='save-button' id={foxyQuote.id} alt='Foxy Quote save button' onClick={saveFoxyQuote}>Save This Trickster!</button>
            <button className='create-more-button' alt='Foxy Quote create button' onClick={createFoxyQuote}>Fox Me Another Quote!</button>
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