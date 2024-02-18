import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = productSlice.actions

export default productSlice.reducer