import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice'
import Size from './slices/Size';
import Text from './slices/Text';

const store = configureStore({
   reducer : {
        menuState : menuReducer,
        sizeState : Size,
        textState : Text
    }
});

export default store;
