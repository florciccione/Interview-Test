import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchWeather } from  "../store/slices";

//Material
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

//CSS
import './Nav.css';

const apiKey = "f5c39eabb23d3ed9e45e06b721fe66a9";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(fetchWeather(city, apiKey));
      setCity("");
    }}>
      <input
        className="searchInput"
        type="text"
        placeholder="Enter the city whose weather you want to know..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <IconButton type="submit"  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  
  );
}