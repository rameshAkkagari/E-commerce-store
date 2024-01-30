import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        amount:0,
        totalPrice:0,
        totalAmount:0
    },
    reducers:{
        addToCart(state,action){
            const productsID = action.payload
            try {
                const exist = state.cart.find((item)=>
                              item.id === productsID.id &&
                              item.size === productsID.size && 
                              item.color === productsID.color );
                if(exist){
                    exist.amount++;
                    exist.totalPrice +=productsID.price;
                    state.totalAmount++;
                    state.totalPrice += productsID.price
                } else{
                    state.cart.push({
                        id:productsID.id,
                        price:productsID.price,
                        size:productsID.size,
                        amount:1,
                        totalPrice:productsID.price,
                        name:productsID.name,
                        color:productsID.color
                    })
                    state.totalAmount++
                    state.totalPrice+= productsID.price
                }
            } catch (error) {
                
            }
        }
    }
})

export const cartActions = CartSlice.actions


export default CartSlice;