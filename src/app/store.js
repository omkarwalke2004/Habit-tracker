import { configureStore } from "@reduxjs/toolkit";
import habitreducer from "../features/habits/habitSlice"


export const store = configureStore({
    reducer:{
        habits:habitreducer,
    },
})