import React from 'react';
import { Provider } from 'react-redux';

import WeatherPage from './components/WeatherPage';
import SearchBar from './components/SearchBar';
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <SearchBar />
      <WeatherPage />
    </Provider>
  );
}

export default App;