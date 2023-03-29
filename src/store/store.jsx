import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice'

const store = configureStore({
   reducer : {
        menuState : menuReducer
    }
});

export default store;
