import { createSlice } from '@reduxjs/toolkit';

export const geocoderSlice = createSlice({
  name: 'geocoder',
  initialState: '',
  reducers: {
    setGeocoderInput: (state, action) => {
      state = action.payload
      return state;
    },
  },
});
export const { setGeocoderInput } = geocoderSlice.actions;
export default geocoderSlice.reducer;
