import React from 'react';
import NaviBar from '../NaviBar/NaviBar';
import GeneratorContainer from '../GeneratorContainer/GeneratorContainer';
import SavedContainer from '../SavedContainer/SavedContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#78909c',
    },
    secondary: {
      main: '#00acc1',
    },
  },
});

const App = () => {
  return (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <NaviBar/>
      <Switch>
        <Redirect exact path="/" to="/foxyquoter" component={About}/>
        <Route path="/foxy-quoter" component={GeneratorContainer}/>
        <Route path="/quotie-foxes" component={SavedContainer}/>
      </Switch>
    </div>
    </MuiThemeProvider>
  );
}
export default App;
