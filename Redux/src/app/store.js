import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todoslice";

const store =configureStore({
    reducer:todoReducer
    
},)

export default store;