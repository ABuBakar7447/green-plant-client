import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Home/Category/postSlice";





const store = configureStore({
    reducer: {
        posts: postReducer,
    },
})

export default store;