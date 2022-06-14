import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        city: "",
        list: [],
        current: {},
        notFound: false,
        error: false
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
        },
        setCityNotFound: (state) => {
            state.notFound = true;
        },
        setCityError: (state) => {
            state.error = true;
        },
        setClearCityNotFound: (state) => {
            state.notFound = false;
        },
        setClearCityError: (state) => {
            state.error = false;
        },
    },
});

export const { 
    setCurrentWeather, 
    setWeatherList, 
    setCityNotFound, 
    setClearCityNotFound, 
    setCityError, 
    setClearCityError, 
    setCity 
} = weatherSlice.actions;

export default weatherSlice.reducer;