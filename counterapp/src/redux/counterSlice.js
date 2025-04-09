import { createSlice } from "@reduxjs/toolkit"


export const counterSlice = createSlice({
    name : "counter",
    initialState:{
        value : 0
    },
    //actions
    reducers : {
        //increment
        increment : (state, action) => {
            state.value += action.payload
        },
        //decrement
        decrement : (state, action) => {
            state.value -= action.payload
        },
        //reset
        reset : (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset } = counterSlice.actions 
export default counterSlice.reducer