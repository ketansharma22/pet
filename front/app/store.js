import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/reducers.js'
export const store=configureStore({
    reducer:{
        auth: authReducer,
    },
})