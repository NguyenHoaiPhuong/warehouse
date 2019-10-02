import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { pink, blue } from '@material-ui/core/colors';
import './App.css';
import { store } from '../store/store';
import NavigationBar from '../containers/navibar/AppBar'
import Signin from '../containers/login/Signin'
import Signup from '../containers/login/Signup'

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
            <Route exact path="/" component={NavigationBar} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </MuiThemeProvider>
        </Router>
      </Provider>      
    )
  }
}

export default App;
