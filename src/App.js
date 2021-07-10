import './styles/_main.scss';
import React from 'react';
import { Home } from './pages';
import { ReduxProvider } from './init';

function App() {
  return (
    <ReduxProvider>
      <Home />
    </ReduxProvider>
  );
}

export default App;
