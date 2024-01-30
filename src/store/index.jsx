import { configureStore } from "@reduxjs/toolkit";
import Slider from "./SliderSlice";
import ProductsSlice from "./ProductSlice";
import CartSlice from "./Cartslice";
const store = configureStore({
    reducer:{
        slider:Slider.reducer,
        product:ProductsSlice.reducer,
        cart:CartSlice.reducer
    }
})

export default store