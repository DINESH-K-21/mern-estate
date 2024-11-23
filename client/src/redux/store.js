import { configureStore } from "@reduxjs/toolkit"
import  useReducer  from "./user/userslice"

export const store = configureStore({
    reducer:{user: useReducer},
    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare({
            serializableCheck:false,
        }),
})