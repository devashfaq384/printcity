import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'sizeState',
    initialState: {
        direction : true,
        height : "380px",
        width : '250px'
    },
    reducers: {
        changeSize(state, action) {

            const { height, width, direction } = action.payload;

            if (direction === true) {
                return { height, width, direction };
              } else {
                return {  height, width, direction };
              }
        }
    }
})

export const { changeSize } = menuSlice.actions
export default menuSlice.reducer