import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "./features/imgSlice";
import productReducer from "./features/prodSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
    reducer: {
        bgImgs: imgReducer,
        products: productReducer,
        cart: cartReducer,
    },
});