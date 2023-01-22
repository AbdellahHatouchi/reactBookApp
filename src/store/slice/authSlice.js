import { createSlice } from "@reduxjs/toolkit";

const initialState = {name:'abdellah hatouchi', isLogin:false}

const authSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        logOut : (state,action)=>{
            return initialState
        },
        handaleUserName : (state,action)=>{
            state.name = action.payload.name
            state.isLogin = true
        }
    }
})

export default authSlice.reducer
export const {logOut,handaleUserName} = authSlice.actions