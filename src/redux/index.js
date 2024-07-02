import { configureStore } from '@reduxjs/toolkit'
import TodosReducer from "./TodoSlice"

export const store = configureStore({
    reducer: {
        todos: TodosReducer
    },
})