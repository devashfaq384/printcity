import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const  styleSlice = createSlice({
    name: 'styleState',
    initialState: {
        name : "water",
        style : "mapbox://styles/ashfaq384/clfwdovsg003401mpotp64xp4"
    },
    reducers: {
        changeStyle(state, action) {
            return action.payload
        }
    }
})

export const { changeStyle } = styleSlice.actions
export default  styleSlice.reducer