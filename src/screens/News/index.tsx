import { FlatList, View, Divider, SectionList } from 'native-base';
import { RootState } from '@redux/store';
import { IbgeApiServiceInstance } from '@services/IbgeApiService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '@redux/newsSlice';
import { NewsItem } from '@components/NewsItem';
import { Header } from '@components/Header';
import { RefreshControl } from 'react-native';

export function News() {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news);
  const favorites = useSelector((state: RootState) => state.favorites);

  const handleGetNews = async (pageNumber?: number) => {
    try {
      setRefreshing(true);
      const response = await IbgeApiServiceInstance.getNews(pageNumber);
      if (response) {
        dispatch(addNews(response));
      }
    } catch (error) {
      console.error('Erro ao pegar noticias', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (news.count === 0) {
      handleGetNews();
    }
  }, []);

  return (
    <View padding={15}>
      <Header text="Smart Br" />
      <FlatList
        data={news.items}
        renderItem={({ item }) => {
          const isFavorite = favorites.some(fav => fav.id === item.id);
          return <NewsItem key={item.id} {...item} isFavorited={isFavorite} />;
        }}
        ItemSeparatorComponent={() => <Divider marginY={3} />}
        marginTop={3}
        onEndReached={async () => {
          if (news.totalPages > news.page) {
            handleGetNews(news?.nextPage ?? news.page + 1);
          }
        }}
        refreshControl={<RefreshControl refreshing={refreshing} />}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}
