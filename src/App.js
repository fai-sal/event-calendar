import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return <Provider store={store}><Home /></Provider>
  }
}

export default App;
