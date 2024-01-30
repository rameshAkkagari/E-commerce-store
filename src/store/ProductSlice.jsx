// import { createSlice } from "@reduxjs/toolkit";
// import {storeData} from '../assets/Data/DummyData';
// const ProductsSlice = createSlice({
//     name:"slice",
//     initialState:{
//         filteredproducts:
//             JSON.parse(sessionStorage.getItem("filteredDate")) || storeData,
//         singleproduct:
//             JSON.parse(sessionStorage.getItem("oneproducts")) || storeData,
//     },
//     reducers:{
//         filterproducts(state,action){
//             try {
//                 const filter = storeData.filter((product)=> product.type === action.payload);
//                 state.filteredproducts = filter
//                 console.log("filter", filter);
//                 const savestate = JSON.stringify(filter);
//                 sessionStorage.setItem("filteredDate",savestate)
//             } catch (error) {
//                 console.log("error",error);
//             }
//         },
//         singleProducts(state,action){
//             try {
//                 const oneproduct = storeData.filter((products)=>products.id === action.payload);
//                 state.singleproduct = oneproduct
//                 const saveoneproduct = JSON.stringify(oneproduct)
//                 sessionStorage.setItem("oneproducts",saveoneproduct)
//                 console.log("products", oneproduct);
//             } catch (error) {
                
//             }
//         }
//     }
// });

// export const ProductActions = ProductsSlice.actions

// export default ProductsSlice;

import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../assets/Data/DummyData';

const ProductsSlice = createSlice({
  name: "slice",
  initialState: {
    filteredproducts:
      JSON.parse(sessionStorage.getItem("filteredDate")) || storeData,
    singleproduct:
      JSON.parse(sessionStorage.getItem("oneproducts")) || storeData,
  },
  reducers: {
    filterproducts(state, action) {
      try {
        const filter = storeData.filter((product) => product.type === action.payload);
        state.filteredproducts = filter;
        console.log("filter", filter);
        const savestate = JSON.stringify(filter);
        sessionStorage.setItem("filteredDate", savestate);
      } catch (error) {
        console.error("Error filtering products:", error);
      }
    },
    singleProducts(state, action) {
      try {
        const oneproduct = storeData.filter((products) => products.id === action.payload);
        state.singleproduct = oneproduct;
        const saveoneproduct = JSON.stringify(oneproduct);
        sessionStorage.setItem("oneproducts", saveoneproduct);
        console.log("products", oneproduct);
      } catch (error) {
        console.error("Error fetching single product:", error);
      }
    },
  },
});

export const ProductActions = ProductsSlice.actions;

export default ProductsSlice;
