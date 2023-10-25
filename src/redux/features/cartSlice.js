import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },

    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(x => x.id === item.id);
            if (existingItem) {
                existingItem.quantity++; 
            } else {
                state.cartItems.push({ ...item, quantity: 1 }); 
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(x => x.id !== id);
        },
        increment: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(x => x.id === id);
            if (item) {
                item.quantity++; 
            }
        },
        decrement: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(x => x.id === id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--; 
                }
                else if(item.quantity === 1){
                    state.cartItems = state.cartItems.filter(x => x.id !== id);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
