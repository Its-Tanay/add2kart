import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },

    reducers:{
        addToCart: (state, action) => {
            const item = action.payload;
            const product = state.cartItems.find(x => x.id === item.id);
            if(product){
                state.cartItems = state.cartItems.map(x => x.id === product.id ? item : x);
            }else{
                state.cartItems = [...state.cartItems, item];
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(x => x.id !== id);
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;