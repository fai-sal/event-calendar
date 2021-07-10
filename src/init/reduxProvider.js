import React from 'react';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// dev tools middleware
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(rootReducer, composeSetup(
    applyMiddleware(reduxThunk)
));

export const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>{children}</Provider>
    );
}

