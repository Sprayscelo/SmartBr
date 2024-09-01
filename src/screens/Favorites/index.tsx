import { useDispatch, useSelector } from 'react-redux';
import { loadFavoriteNews } from '@redux/favoriteSlice';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '@redux/store';
import { FlatList, View, Text, Divider } from 'native-base';
import { NewsItem } from '@components/NewsItem';
import { theme } from '@theme/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import { Header } from '@components/Header';
import { FavoriteNewsItem } from '@components/FavoriteNewsItem';

export function Favorites() {
  const dispatch: AppDispatch = useDispatch();
  const favoritesNews = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    dispatch(loadFavoriteNews());
  }, [dispatch]);

  return (
    <View padding={15}>
      <Header text="Favoritos" showBackButton />
      <FlatList
        data={favoritesNews}
        renderItem={({ item }) => <FavoriteNewsItem {...item} />}
        ItemSeparatorComponent={() => <Divider marginY={3} />}
        marginTop={3}
        ListEmptyComponent={() => (
          <View
            justifyContent={'center'}
            alignItems={'center'}
            height={Dimensions.get('window').height}
            padding={5}>
            <Icon
              name="heart-remove-outline"
              size={32}
              color={theme.colors.icon}
            />
            <Text
              fontFamily={theme.fonts.semiBold}
              color={theme.colors.letter}
              fontSize={16}
              flexWrap={'wrap'}
              textAlign={'center'}
              marginTop={3}>
              Você não possui nenhuma noticia marcada como favorita
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}
