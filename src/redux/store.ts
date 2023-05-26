import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './features/Cart.slice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

