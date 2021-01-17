import React from 'react';

const SavedContainer = ({savedFoxyQuotes, deleteFoxyQuote}) => {
  if (savedFoxyQuotes.length < 1) {
    return (
      <section>
         <h1 className="no-foxy-quotes">You haven't saved any Foxy Quotes to your stash yet!</h1>
      </section>
    )
  } else if (savedFoxyQuotes.length > 0) {
    const displaySavedFoxes = savedFoxyQuotes.map(foxyQuote => {
      return (
        <div className='saved-foxy-quote'>
          <img src={foxyQuote.img} alt='Fox'/>
          <div>
            <p label='Quote:' name='quote'>{foxyQuote.quote}</p>
            <p label='Author:' name='author'>{foxyQuote.author}</p>
          </div>
          <button name='delete-button' id={foxyQuote.id} alt='Foxy Quote delete button' onClick={deleteFoxyQuote}>Delete This Trickster!</button>
        </div>
      )
    })
    return(
      <section>
        {displaySavedFoxes}
      </section>
    )
  }
}

export default SavedContainer;