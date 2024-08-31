import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '@redux/newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer
  }
});

// Tipagem da loja
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
