import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './reducers';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)