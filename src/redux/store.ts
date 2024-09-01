import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '@redux/newsSlice';
import favoriteReducer from '@redux/favoriteSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    favorites: favoriteReducer
  }
});

// Tipagem da loja
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
