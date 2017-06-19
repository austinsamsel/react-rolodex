import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './containers/App.js'
import contacts from './reducers/contacts.js'
import search from './reducers/search.js'
import sort from './reducers/sort.js'
import './index.css';
import 'normalize.css'
import 'milligram'

const reducer = combineReducers({
  contacts, 
  search,
  sort
})

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
