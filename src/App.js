import React from 'react';
import { Provider } from 'react-redux';

import HomePage from './components/HomePage';
import SearchBar from './components/SearchBar';
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <SearchBar />
      <HomePage />
    </Provider>
  );
}

export default App;