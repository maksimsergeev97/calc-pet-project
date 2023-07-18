import { configureStore } from '@reduxjs/toolkit';
import values from '../components/slices/valuesSlice';
import operations from '../components/slices/operationSlice';
import theme from '../components/slices/themeSlice';

const store = configureStore({
  reducer: {values, operations, theme},
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;