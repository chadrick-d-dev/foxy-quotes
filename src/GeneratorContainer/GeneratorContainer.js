import React, { useState, useEffect } from 'react';
import { getFoxPhoto, getQuote } from '../apiCalls';

const GeneratorContainer = ({getFoxyQuoteInfo, foxyQuote, saveFoxyQuote}) => {

  const [foxPhoto, setFoxPhoto ] = useState('');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')
  const [foxyCard, setFoxyCard] = useState(false);
  useEffect(() => {
  }, [])

  const obtainFoxPhoto = async () => {
    await getFoxPhoto()
    .then(data => setFoxPhoto(data.image))
    .catch(err => console.log(err))
  }

  const obtainQuote = async () => {
    await getQuote()
    .then(data => { 
      setQuote(data.content)
      setAuthor(data.author)
    })
    .catch(err => console.log(err))
  }

  handleClick = () => {
    obtainFoxPhoto()
    obtainQuote()
    getFoxyQuoteInfo(foxPhoto, quote, author)
    setFoxyCard(true)
  }
  //I need to conditional render solo button for new foxyquote if there is no foxyQuoteInfo,
  //If there is foxyquoteinfo I need to render a card with save button and refresh button
  //if refresh button is clicked a new foxy button will appear
  if (!foxyQuote.length) {
    return (
      <div>
        <button name='create-button' alt='Foxy Quote create button' onClick={handleClick}>Foxy Me A Quote!</button>
      </div> 
    )
  } else {
    return (
      <div>
        <div name='new-foxy-quote-card'>
          <img src={foxyQuote.img} />
          <div>
            <p label='Quote:' name='quote'>{foxyQuote.quote}</p>
            <p label='Author:' name='author'>{foxyQuote.author}</p>
          </div>
          <button name='save-button' alt='Foxy Quote save button' onClick={saveFoxyQuote}>Save This Trickster!</button>
          <button name='create-more-button' alt='Foxy Quote create button' onClick={handleClick}>Fox Me Another Quote!</button>
        </div>
      </div>
    )
  }
}

export default GeneratorContainer;