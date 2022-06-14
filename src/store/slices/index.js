import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        city: "",
        list: [],
        current: {}
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setCurrentWeather: (state, action) =>  {
            state.current = action.payload;
        },
        setWeatherList: (state, action) =>  {
            state.list = action.payload;
        }
    },
});

export const { setCurrentWeather, setWeatherList, setCity } = weatherSlice.actions;

export default weatherSlice.reducer;

export const fetchWeather = (city, apiKey) => (dispatch) => {
    axios
    .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${apiKey}`)
    .then((response) => {
        dispatch(setCity(response.data[0].name));
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`)
            .then((data) => {
                dispatch(setCurrentWeather(data.data));
            }).catch((error) => console.log(error));  
        axios
            .get(`http://api.openweathermap.org/data/2.5/forecast?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`)
            .then((data) => {
                dispatch(setWeatherList(data.data.list));
            }).catch((error) => console.log(error));  
            
    })
    .catch((error) => console.log(error));
}