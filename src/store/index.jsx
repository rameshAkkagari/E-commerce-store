import { configureStore } from "@reduxjs/toolkit";
import Slider from "./SliderSlice";
import ProductsSlice from "./ProductSlice";
const store = configureStore({
    reducer:{
        slider:Slider.reducer,
        product:ProductsSlice.reducer
    }
})

export default store