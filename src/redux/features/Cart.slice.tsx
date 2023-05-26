import { createSlice } from "@reduxjs/toolkit";

type cartItem = {
    quantity: number;
}

type cartState = {
    cartItems: cartItem[],
    amount: number;
    totalPrice: number;
    isLoading: boolean;
}

const initialState: cartState = {
    cartItems: [],
    amount: 0,
    totalPrice: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

console.log(cartSlice)

export default cartSlice.reducer

