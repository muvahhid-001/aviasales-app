import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import reduce from '../Reducer/Reducer';

const store = configureStore({
  reducer: reduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(thunk),
});

export default store;
