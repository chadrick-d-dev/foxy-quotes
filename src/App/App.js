import React from 'react';
import NaviBar from '../NaviBar/NaviBar';
import GeneratorContainer from '../GeneratorContainer/GeneratorContainer';
import SavedContainer from '../SavedContainer/SavedContainer';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const [foxyQuote, setFoxyQuote] = useState(null);
  const [savedFoxyQuotes, setSavedFoxyQuotes] = useState();

  const getFoxyQuoteInfo = (foxPhoto, quote, author) => {
    setFoxyQuote = { 
      "id": Date.now(),
      "img": foxPhoto, 
      "quote": quote, 
      "author": author
    }
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
      <Redirect exact path="/" to="/foxy-quoter" component={About}/>
      <Route path="/foxy-quoter" 
        render={() => <GeneratorContainer foxyQuote={foxyQuote} getFoxyQuoteInfo={getFoxyQuoteInfo} saveFoxyQuote={saveFoxyQuote}/>}
      />
      <Route path="/quotie-foxes" 
        render={() => <SavedContainer savedFoxyQuotes={savedFoxyQuotes} deleteFoxyQuote={deleteFoxyQuote}/>}
      />
    </Switch>
  </div>
  );
}
export default App;
