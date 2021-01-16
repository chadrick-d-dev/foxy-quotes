import React, {useState} from 'react';
import './App.css';
import NaviBar from '../NaviBar/NaviBar';
import GeneratorContainer from '../GeneratorContainer/GeneratorContainer';
import SavedContainer from '../SavedContainer/SavedContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getFoxPhoto, getQuote } from '../apiCalls.js';

const App = () => {
  const [foxyQuote, setFoxyQuote] = useState(null);
  const [savedFoxyQuotes, setSavedFoxyQuotes] = useState([]);
  const [quoteCreated, setQuoteCreated] = useState()
  
  const createFoxyQuote = () => {
    Promise.all([getFoxPhoto(), getQuote()])
    .then(data => setFoxyQuote({
      img: data[0].image,
      quote: data[1].content,
      author: data[1].author
    }))
    .catch(err => console.log(err))
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
      render={() => <GeneratorContainer createFoxyQuote={createFoxyQuote} foxyQuote={foxyQuote} saveFoxyQuote={saveFoxyQuote}/>}
      />
      <Route path="/quotie-foxes" 
        render={() => <SavedContainer savedFoxyQuotes={savedFoxyQuotes} deleteFoxyQuote={deleteFoxyQuote}/>}
      />
    </Switch>
  </div>
  );
}
export default App;
