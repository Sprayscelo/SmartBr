import { Button } from '@components/Button';
import { News } from '@components/NewsItem';
import { useNavigation } from '@react-navigation/native';
import { removeFavoriteNews } from '@redux/favoriteSlice';
import { NativeStackNavigationProps } from '@routes/index';
import { theme } from '@theme/index';
import { Box, Image, Text, View } from 'native-base';
import { useDispatch } from 'react-redux';

export function FavoriteNewsItem({
  id,
  data_publicacao,
  destaque,
  editorias,
  imagens,
  introducao,
  link,
  produto_id,
  produtos,
  produtos_relacionados,
  tipo,
  titulo
}: News) {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProps>();
  const baseImageUrl = 'https://agenciadenoticias.ibge.gov.br/';

  return (
    <Box>
      <View flexDirection={'row'}>
        <Image
          borderRadius={16}
          source={{
            uri: `${baseImageUrl}${JSON.parse(imagens).image_intro}`
          }}
          width={'62px'}
          minHeight={'72px'}
          alt={`${baseImageUrl}${JSON.parse(imagens).image_intro_alt}`}
        />
        <Text
          fontFamily={theme.fonts.semiBold}
          color={theme.colors.title}
          fontSize={20}
          flexGrow={1}
          maxWidth={'80%'}
          marginLeft={3}>
          {titulo}
        </Text>
      </View>
      <Text
        fontFamily={theme.fonts.regular}
        color={theme.colors.introduction}
        fontSize={12}
        marginY={2.5}>
        {data_publicacao.split(' ')[0]}
      </Text>
      <View flexDirection={'row'} justifyContent={'center'} style={{ gap: 15 }}>
        <Button
          onPress={() => dispatch(removeFavoriteNews(id))}
          text={'Remover'}
          type="Favorite"
        />
        <Button
          text="Ver tudo"
          type="ViewAll"
          onPress={() =>
            navigate('webview', {
              link
            })
          }
        />
      </View>
    </Box>
  );
}
