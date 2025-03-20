import { configureStore } from '@reduxjs/toolkit';
import reduce from '../Reducer/Reducer';

const store = configureStore({
  reducer: reduce,
});

export default store;
