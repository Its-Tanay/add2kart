import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "./features/imgSlice";

export const store = configureStore({
    reducer: {
        bgImgs: imgReducer,
    },
});