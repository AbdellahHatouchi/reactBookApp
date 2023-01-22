import { createSlice } from "@reduxjs/toolkit";

const initialState = {showModal:false}

const modalSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        hideModal : (state,action)=>{
            state.showModal = false
        },
        showModal : (state,action)=>{
            state.showModal = true
        }
    }
})

export default modalSlice.reducer
export const {hideModal,showModal} = modalSlice.actions