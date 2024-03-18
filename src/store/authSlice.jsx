import { createSlice } from "@reduxjs/toolkit";
// JSON.parse(sessionStorage.getItem("authuser"))
const authSlice  =createSlice({
    name:"auth",
    initialState:JSON.parse(localStorage.getItem("auth")) || {
      user: {
        name: "",
        password: "",
        img: "",
        authuser: false,
      },
    },
    reducers:{
        login(state,action){
            const userId = action.payload;
            const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
            const passwordValidation =
              /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
                userId.password
              );
            state.user = userId;
            if(!userValidation || !passwordValidation){
                state.user.authuser = false
            }else{
                state.user.authuser = true;
                const saveState = JSON.stringify(userId)
                sessionStorage.setItem("authuser" , saveState);
                localStorage.setItem("auth",saveState)
            }
        },
        logout(state,action){
            state.user  ={
                user:{
                    name:"",
                    password:"",
                    img:"",
                    authuser:false
                }
            }
            sessionStorage.clear()
        }
    }
})

export const authAuction = authSlice.actions;

export default authSlice;