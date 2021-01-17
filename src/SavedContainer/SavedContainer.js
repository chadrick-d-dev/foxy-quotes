import React from 'react';
import './SavedContainer.css';
import PropTypes from 'prop-types';
import FoxyLogoOrange from '../Assets/FoxyLogoOrange.png';

const SavedContainer = ({savedFoxyQuotes, deleteFoxyQuote}) => {
  if (savedFoxyQuotes.length < 1) {
    return (
      <section className='no-quotes-message'>
        <img className='no-quotes-orange-logo' src={FoxyLogoOrange} alt='Foxy Quotes Logo'/>
        <h1 className='no-quotes-header'>You haven't stashed any Foxy Quotes yet!</h1>
      </section>
    )
  } else if (savedFoxyQuotes.length > 0) {
    const displaySavedFoxes = savedFoxyQuotes.map(foxyQuote => {
      return (
        <section className='saved-foxy-quote' id={foxyQuote.id} key={foxyQuote.id}>
          <img className='saved-fox-image' src={foxyQuote.img} alt='Fox'/>
          <div className='fox-quote'>
            <label htmlFor='quote'>Quote:</label>
            <p className='quote'>{foxyQuote.quote}</p>
          </div>
          <div className='fox-author'>
            <label htmlFor='author'>Author:</label>
            <p className='author'>{foxyQuote.author}</p>
          </div>
          <button className='delete-button' id={foxyQuote.id} alt='Foxy Quote delete button' onClick={deleteFoxyQuote}>Out Of My Stash, Fox!</button>
        </section>
      )
    })
    return(
      <section className='saved-container'>
        {displaySavedFoxes}
      </section>
    )
  }
}

SavedContainer.propTypes = {
  savedFoxyQuotes: PropTypes.array,
  deleteFoxyQuote: PropTypes.func
}

export default SavedContainer;