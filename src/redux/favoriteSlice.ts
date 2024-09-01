import { News } from '@components/NewsItem';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

const initialState: News[] = [];

const { getItem, setItem } = useAsyncStorage('@FavoriteNews');

const newsSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavoriteNews(state, action: PayloadAction<News[]>) {
      return action.payload;
    },
    addFavoriteNews(state, action: PayloadAction<News>) {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    removeFavoriteNews(state, action: PayloadAction<number>) {
      const index = state.findIndex(news => news.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        saveToLocalStorage(state);
      }
    }
  }
});

export const { setFavoriteNews, addFavoriteNews, removeFavoriteNews } =
  newsSlice.actions;

export default newsSlice.reducer;

async function saveToLocalStorage(state: News[]) {
  try {
    await setItem(JSON.stringify(state));
  } catch (error) {
    console.error('Erro ao salvar no AsyncStorage:', error);
  }
}

export const loadFavoriteNews = () => async (dispatch: Dispatch) => {
  try {
    const favoriteItems = await getItem();
    if (favoriteItems) {
      dispatch(setFavoriteNews(JSON.parse(favoriteItems)));
    }
  } catch (error) {
    console.error('Erro ao carregar do AsyncStorage:', error);
  }
};
