import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'sizeState',
    initialState: {
        direction : true,
        height : "380px",
        width : '250px',
        class : "rounded-full"
    },
    reducers: {
        changeSize(state, action) {

            const { height, width, direction } = action.payload;

                return { ...state , height, width, direction  };
        }
    }
})

export const { changeSize } = menuSlice.actions
export default menuSlice.reducer