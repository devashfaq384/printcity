import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice'
import Size from './slices/Size';
import Text from './slices/Text';
import Style from './slices/styleSlice'
import geocoderSlice from './slices/searchSlice';

const store = configureStore({
   reducer : {
        menuState : menuReducer,
        sizeState : Size,
        textState : Text,
        styleState : Style,
        mapGeo : geocoderSlice
    }
});

export default store;
