import React, {useState} from 'react';
import './App.css';
import NaviBar from '../NaviBar/NaviBar';
import GeneratorContainer from '../GeneratorContainer/GeneratorContainer';
import SavedContainer from '../SavedContainer/SavedContainer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getFoxPhoto, getQuote } from '../apiCalls.js';

const App = () => {
  const [foxyQuote, setFoxyQuote] = useState(null);
  const [savedFoxyQuotes, setSavedFoxyQuotes] = useState([]);

  const createFoxyQuote = async () => {
    await Promise.all([getFoxPhoto(), getQuote()])
    .then(data => setFoxyQuote({
      id: Date.now(),
      img: data[0].image,
      quote: data[1].content,
      author: data[1].author
    }))
    .catch(err => console.log(err))
  }

  const saveFoxyQuote = (event) => {
    const id = parseInt(event.target.id)
    const checkSaved = savedFoxyQuotes.find(quote => quote.id === id)
    if (!checkSaved) {
      setSavedFoxyQuotes(savedFoxyQuotes => [...savedFoxyQuotes, foxyQuote])
    }
  }

  const deleteFoxyQuote = (event) => {
    const id = parseInt(event.target.id)
    setSavedFoxyQuotes(savedFoxyQuotes.filter(quote => quote.id !== id))
  } 

  return (
  <section className="app-container">
    <NaviBar/>
    <Switch>
      <Redirect exact path="/" to="/foxy-quoter" component={GeneratorContainer}/>
      <Route path="/foxy-quoter" 
      render={() => <GeneratorContainer createFoxyQuote={createFoxyQuote} foxyQuote={foxyQuote} saveFoxyQuote={saveFoxyQuote}/>}
      />
      <Route path="/foxy-stash" 
        render={() => <SavedContainer savedFoxyQuotes={savedFoxyQuotes} deleteFoxyQuote={deleteFoxyQuote}/>}
      />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </section>
  );
}

export default App;
