import { configureStore } from "@reduxjs/toolkit";
import Slider from "./SliderSlice";
import ProductsSlice from "./ProductSlice";
import CartSlice from "./Cartslice";
import authSlice from "./authSlice";
const store = configureStore({
    reducer:{
        slider:Slider.reducer,
        product:ProductsSlice.reducer,
        cart:CartSlice.reducer,
        auth:authSlice.reducer
    }
})

export default store