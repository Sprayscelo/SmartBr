import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProps } from '@routes/index';
import { theme } from '@theme/index';
import { Box, View, Text, Image } from 'native-base';

export interface News {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

export function NewsItem({
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
  const { navigate } = useNavigation<NativeStackNavigationProps>();
  const baseImageUrl = 'https://agenciadenoticias.ibge.gov.br/';
  return (
    <Box>
      <Text
        fontFamily={theme.fonts.semiBold}
        color={theme.colors.title}
        fontSize={20}>
        {titulo}
      </Text>
      <Text
        fontFamily={theme.fonts.medium}
        fontSize={14}
        color={theme.colors.introduction}
        marginY={5}>
        {introducao}
      </Text>
      <Image
        borderRadius={16}
        source={{
          uri: `${baseImageUrl}${JSON.parse(imagens).image_intro}`
        }}
        height={200}
        alt={`${baseImageUrl}${JSON.parse(imagens).image_intro_alt}`}
      />
      <Text
        fontFamily={theme.fonts.regular}
        color={theme.colors.introduction}
        fontSize={12}
        marginY={2.5}>
        {data_publicacao.split(' ')[0]}
      </Text>
      <View flexDirection={'row'} justifyContent={'center'} style={{ gap: 15 }}>
        <Button text="Favoritar" type="Favorite" />
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
