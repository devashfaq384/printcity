import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'menuState',
    initialState: "Location",
    reducers: {
        moveTo(state, action) {
            return action.payload
        }
    }
})

export const { moveTo } = menuSlice.actions
export default menuSlice.reducer