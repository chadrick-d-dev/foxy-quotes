import React from 'react';

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
          <div className='fox-image'>
            <img src={foxyQuote.img} alt='Fox'/>
          </div>
          <div className="fox-text">
            <p label='Quote:' name='quote'>{foxyQuote.quote}</p>
            <p label='Author:' name='author'>{foxyQuote.author}</p>
          </div>
          <button name='delete-button' id={foxyQuote.id} alt='Foxy Quote delete button' onClick={deleteFoxyQuote}>Delete This Trickster!</button>
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