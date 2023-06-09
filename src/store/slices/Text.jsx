import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const textSlice = createSlice({
    name: 'textState',
    initialState: {
        title : 'Amsterdam',
        subTitle : 'N°34°56′12″ S°78°34′90″'
    },
    reducers: {
        changeTitle(state, action) {
            const { title } = action.payload
            return{  ...state , title}
        },
        changeSubTitle(state, action) {
            const { subTitle } = action.payload
            return {...state , subTitle }
        }
    }
})

export const { changeTitle , changeSubTitle } = textSlice.actions
export default textSlice.reducer