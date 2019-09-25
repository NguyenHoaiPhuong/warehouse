import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { pink, blue } from '@material-ui/core/colors';
import './App.css';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
})

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            Hello world
          </MuiThemeProvider>
        </Router>
      </Provider>      
    )
  }
}

export default App;
