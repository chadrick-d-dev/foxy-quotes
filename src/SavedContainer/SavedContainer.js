import React from 'react';
import './SavedContainer.css';

const SavedContainer = ({savedFoxyQuotes, deleteFoxyQuote}) => {
  if (savedFoxyQuotes.length < 1) {
    return (
      <section className='no-quotes-message'>
         <h1 className="no-quotes-header">You haven't saved any Foxy Quotes to your stash yet!</h1>
      </section>
    )
  } else if (savedFoxyQuotes.length > 0) {
    const displaySavedFoxes = savedFoxyQuotes.map(foxyQuote => {
      return (
        <section className='saved-foxy-quote'>
          <img className='saved-fox-image' src={foxyQuote.img} alt='Fox'/>
          <div className='fox-quote'>
            <label for='quote'>Quote:</label>
            <p name='quote'>{foxyQuote.quote}</p>
          </div>
          <div className='fox-author'>
            <label for='author'>Author:</label>
            <p name='author'>{foxyQuote.author}</p>
          </div>
          <button className='delete-button' id={foxyQuote.id} alt='Foxy Quote delete button' onClick={deleteFoxyQuote}>Delete This Trickster!</button>
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

export default SavedContainer;