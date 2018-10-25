import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return <Provider store={store}><Home /></Provider>
  }
}

export default App;
