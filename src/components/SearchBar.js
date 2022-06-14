import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

//Material
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

//CSS
import './styles/Nav.css';

import { 
  setCurrentWeather, 
  setWeatherList, 
  setCityNotFound, 
  setClearCityNotFound, 
  setCityError, 
  setClearCityError, 
  setCity 
} from "../store/slices"

const apiKey = "f5c39eabb23d3ed9e45e06b721fe66a9";

function SearchBar({text}) {
  const [citySelected, setCitySelected] = useState("");
  const dispatch = useDispatch();
  const { error, notFound } = useSelector(state => state.weather);

  const fetchWeather = useCallback(
    () => (dispatch) => {
    axios
    .get(`http://api.openweathermap.org/geo/1.0/direct?q=${citySelected}&limit=3&appid=${apiKey}`)
    .then((response) => {
        if(response.data.length > 0){
            dispatch(setCity(response.data[0].name));
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`)
                .then((data) => {
                    dispatch(setCurrentWeather(data.data));
                    if(notFound) {
                      dispatch(setClearCityNotFound());  
                    }  
                    if(error) {
                      dispatch(setClearCityError());  
                    }
                }).catch(() => dispatch(setCityError()));  
            axios
                .get(`http://api.openweathermap.org/data/2.5/forecast?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`)
                .then((data) => {
                    dispatch(setWeatherList(data.data.list));
                    if(notFound) {
                      dispatch(setClearCityNotFound());  
                    }  
                    if(error) {
                      dispatch(setClearCityError());  
                    }
                }).catch(() => dispatch(setCityError()));  
        } else { 
            dispatch(setCityNotFound());
        }
    })
    .catch(() => dispatch(setCityError()));
  },[error, notFound, citySelected])

  return (
    <form 
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchWeather(citySelected, apiKey));
        setCity("");
      }}>
      <input
        className="searchInput"
        type="text"
        placeholder="Enter the city whose weather you want to know..."
        value={citySelected}
        onChange={e => setCitySelected(e.target.value)}
      />
      <IconButton type="submit"  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  
  );
}
export default SearchBar