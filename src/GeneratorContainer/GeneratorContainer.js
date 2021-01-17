import React from 'react';
import 'GeneratorContainer.css';

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
        <div name='new-foxy-quote'>
          <img className='new-fox-image' src={foxyQuote.img} alt='Fox'/>
          <div className='new-fox-text'>
            <p label='Quote:' name='quote'>{foxyQuote.quote}</p>
            <p label='Author:' name='author'>{foxyQuote.author}</p>
          </div>
          <button className='save-button' id={foxyQuote.id} alt='Foxy Quote save button' onClick={saveFoxyQuote}>Save This Trickster!</button>
          <button className='create-more-button' alt='Foxy Quote create button' onClick={createFoxyQuote}>Fox Me Another Quote!</button>
        </div>
      </section>
    )
  }
}

export default GeneratorContainer;