import React, { useState } from 'react';
import './App.css';
import NaviBar from '../NaviBar/NaviBar';
import GeneratorContainer from '../GeneratorContainer/GeneratorContainer';
import SavedContainer from '../SavedContainer/SavedContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getFoxPhoto, getQuote } from '../apiCalls.js';

const App = () => {
  const [foxPhoto, setFoxPhoto ] = useState('');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')
  const [foxyQuote, setFoxyQuote] = useState('');
  const [savedFoxyQuotes, setSavedFoxyQuotes] = useState([]);
  
  const obtainFoxPhoto = async () => {
    await getFoxPhoto()
    .then(data => setFoxPhoto(data.image))
    .catch(err => console.log(err))
  }

  const obtainQuote = async () => {
    await getQuote()
    .then(data =>  {
      setQuote(data.content)  
      setAuthor(data.author)
    })
    .catch(err => console.log(err))
  }

  const getFoxyQuoteInfo = (foxPhoto, quote, author) => {
    setFoxyQuote({ 
      "id": Date.now(),
      "img": foxPhoto, 
      "quote": quote, 
      "author": author
    })
  }

  const createFoxyQuote = () => {
    obtainFoxPhoto()
    obtainQuote()
    getFoxyQuoteInfo(foxPhoto, quote, author)
  }

  const saveFoxyQuote = (foxyQuote) => {
    setSavedFoxyQuotes(savedFoxyQuotes => [...savedFoxyQuotes, foxyQuote])
  }

  const deleteFoxyQuote = (event) => {
    const id = event.target.getAttribute("id")
    setSavedFoxyQuotes(savedFoxyQuotes.filter(quote => quote.id !== id))
  } 

  

  return (
  <div className="App">
    <NaviBar/>
    <Switch>
      <Redirect exact path="/" to="/foxy-quoter" component={GeneratorContainer}/>
      <Route path="/foxy-quoter" 
      render={() => <GeneratorContainer createFoxyQuote={createFoxyQuote} foxyQuote={foxyQuote} getFoxyQuoteInfo={getFoxyQuoteInfo} saveFoxyQuote={saveFoxyQuote}/>}
      />
      <Route path="/quotie-foxes" 
        render={() => <SavedContainer savedFoxyQuotes={savedFoxyQuotes} deleteFoxyQuote={deleteFoxyQuote}/>}
      />
    </Switch>
  </div>
  );
}
export default App;
