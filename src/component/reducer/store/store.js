import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../reducer/todo.reducer";



let store = configureStore({
    reducer : todoReducer,
    // middleware: (getdefaultmiddleware) => getdefaultmiddleware,
    devTools : process.env.NODE_ENV === "development" ? true : false
})


export default store;