import { configureStore } from "@reduxjs/toolkit";
import weather from "./slices"

export default configureStore({
    reducer: {
        weather
    }
});
 
