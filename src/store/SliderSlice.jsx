import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../assets/Data/DummyData";
const Slider = createSlice({
    name:"slider",
    initialState:{
        value:0,
        length:sliderData.length,
    },
    reducers:{
        nextSlide(state,action){
            console.log('action' ,action);
            console.log('state',state);
            state.value = action.payload > state.length -1 ? 0: action.payload
        },
        prevSlide(state,action){
            state.value = action.payload < 0 ? state.length -1 : action.payload
        },
        dotSlide(state,action){
            const slide = action.payload
            console.log('dot',slide);
            state.value = slide
        },
    }
})

export const SliderAction = Slider.actions

export default Slider