import { createSlice } from "@reduxjs/toolkit";
import {storeData} from '../assets/Data/DummyData';
const ProductsSlice = createSlice({
    name:"slice",
    initialState:{
        filteredproducts:JSON.parse(sessionStorage.getItem("filteredDate")) || storeData
    },
    reducers:{
        filterproducts(state,action){
            try {
                const filter = storeData.filter((product)=> product.type === action.payload);
                state.filteredproducts = filter
                console.log("filter", filter);
                const savestate = JSON.stringify(filter);
                sessionStorage.setItem("filteredDate",savestate)
            } catch (error) {
                
            }
        }
    }
});

export const ProductActions = ProductsSlice.actions

export default ProductsSlice;