import {configureStore} from '@reduxjs/toolkit';
import signInDataslice from './reducers/signInDataSlice';
import tokenSlice from './reducers/tokenSlice';

const store = configureStore({
  reducer: {signin: signInDataslice.reducer, Token: tokenSlice},
});

export default store;
