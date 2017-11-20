import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/base.css';
import store from './configureStore';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthenticatedRoute exact path="/*" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
