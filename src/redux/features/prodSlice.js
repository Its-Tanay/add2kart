import { createSlice } from "@reduxjs/toolkit";
import prodcutsData from '../../data.json';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: prodcutsData,
    }
});

export default productSlice.reducer;