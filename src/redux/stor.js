import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slice/filterSlice';
import card from './slice/cardSlise';


export const store = configureStore({
  reducer: {filterSlice, card}
});


