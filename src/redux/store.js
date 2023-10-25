import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "./features/imgSlice";
import productReducer from "./features/prodSlice";

export const store = configureStore({
    reducer: {
        bgImgs: imgReducer,
        products: productReducer,
    },
});