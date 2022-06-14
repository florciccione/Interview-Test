import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import HomePage from './pages/HomePage';
import store from "./store"

const App = () => {

  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;