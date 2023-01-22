import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import bookReducer from "./slice/bookSlice";
import modalReducer from "./slice/modalSlice";


export const store = configureStore({
    reducer:{
        books : bookReducer,
        user : authReducer,
        modal : modalReducer
    }
})