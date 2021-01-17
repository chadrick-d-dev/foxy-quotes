import React from 'react';


const GeneratorContainer = ({createFoxyQuote, foxyQuote, saveFoxyQuote}) => {

  //I need to conditional render solo button for new foxyquote if there is no foxyQuoteInfo,
  //If there is foxyquoteinfo I need to render a card with save button and refresh button
  //if refresh button is clicked a new foxy button will appear
  if (!foxyQuote) {
    return (
      <div>
        <button name='create-button' alt='Foxy Quote create button' onClick={createFoxyQuote}>Foxy Me A Quote!</button>
      </div> 
    )
  } else {
    return (
      <div>
        <div name='new-foxy-quote-card'>
          <img src={foxyQuote.img} alt='Fox'/>
          <div>
            <p label='Quote:' name='quote'>{foxyQuote.quote}</p>
            <p label='Author:' name='author'>{foxyQuote.author}</p>
          </div>
          <button name='save-button' id={foxyQuote.id} alt='Foxy Quote save button' onClick={saveFoxyQuote}>Save This Trickster!</button>
          <button name='create-more-button' alt='Foxy Quote create button' onClick={createFoxyQuote}>Fox Me Another Quote!</button>
        </div>
      </div>
    )
  }
}

export default GeneratorContainer;