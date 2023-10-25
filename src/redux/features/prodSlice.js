import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
    },
    reducers:{
        setProducts: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;