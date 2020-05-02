import React, { Component } from 'react';
import './App.css';
import Home from './components/home';

import {
  createStore,
  applyMiddleware
} from 'redux';

import {
  Provider
} from 'react-redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
