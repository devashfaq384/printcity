import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'menuState',
    initialState: "Location",
    reducers: {
        moveTo(state, action) {
            state = action.payload
        }
    }
})

export const { add } = menuSlice.actions
export default menuSlice.reducer