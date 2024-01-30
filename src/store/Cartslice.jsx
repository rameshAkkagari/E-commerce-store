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
                        img:productsID.img,
                        text:productsID.text,
                        totalPrice:productsID.price,
                        name:productsID.name,
                        color:productsID.color
                    })
                    state.totalAmount++
                    state.totalPrice+= productsID.price
                }
            } catch (error) {
                return error
            }
        },
        removeItem(state,action){
            const productsId = action.payload;
            try {
                const exist = state.cart.find((item)=>
                              item.id === productsId.id &&
                              item.size === productsId.size && 
                              item.color === productsId.color );
                if(exist.amount === 1){
                    state.cart = state.cart.filter((product)=>
                                  product.id !==productsId.id || 
                                  product.size !== product.size || 
                                  product.color !== product.color 
                                )
                    state.totalAmount--;
                    state.totalPrice -= productsId.price
                } else{
                    exist.amount--;
                    exist.totalPrice -= productsId.price;
                    state.totalAmount--;
                    state.totalPrice -= productsId.price
                }
            } catch (error) {
                
            }
        }
    }
})

export const cartActions = CartSlice.actions


export default CartSlice;