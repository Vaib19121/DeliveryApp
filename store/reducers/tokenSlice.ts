import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const Customer = createSlice({
  name: 'tokenSlice',
  initialState,
  reducers: {
    setToken(
      state: {token: null | string},
      action: {payload: {token: string}},
    ) {
      state.token = action.payload.token;
    },
  },
});

export const { setToken} = Customer.actions;
export default Customer.reducer;
