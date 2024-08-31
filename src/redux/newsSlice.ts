import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsResponse } from '@services/IbgeApiService';

const initialState: NewsResponse = {
  count: 0,
  page: 0,
  totalPages: 0,
  nextPage: null,
  previousPage: null,
  showingFrom: 0,
  showingTo: 0,
  items: []
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews(state, action: PayloadAction<NewsResponse>) {
      const {
        count,
        items,
        nextPage,
        page,
        previousPage,
        showingFrom,
        showingTo,
        totalPages
      } = action.payload;

      state.count = count;
      state.nextPage = nextPage;
      state.page = page;
      state.previousPage = previousPage;
      state.showingFrom = showingFrom;
      state.showingTo = showingTo;
      state.totalPages = totalPages;
      state.items = [...state.items, ...items];
    }
  }
});

export const { addNews } = newsSlice.actions;

export default newsSlice.reducer;
