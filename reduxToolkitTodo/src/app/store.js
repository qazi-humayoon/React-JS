import {configureStrore} from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";

export const store = configureStrore({
    reducer: todoReducer
})