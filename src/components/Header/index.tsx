import { useNavigation } from '@react-navigation/native';
import { theme } from '@theme/index';
import { Text, View } from 'native-base';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  text: string;
  showBackButton?: boolean;
}

export function Header({ text, showBackButton = false }: HeaderProps) {
  const { goBack } = useNavigation();
  const statusBarHeight = useSafeAreaInsets().top;

  return (
    <View
      marginTop={statusBarHeight}
      flexDirection="row"
      alignItems={'center'}
      borderBottomWidth={1}
      borderBottomColor={theme.colors.border}
      paddingBottom={3}
      style={{ gap: 12 }}>
      {showBackButton ? (
        <MaterialIcons
          onPress={goBack}
          name="keyboard-arrow-left"
          size={22}
          color={theme.colors.icon}
        />
      ) : (
        <Image
          style={{ height: 32, width: 32 }}
          source={require('@assets/png/Logo.png')}
        />
      )}
      <Text
        fontFamily={theme.fonts.semiBold}
        color={theme.colors.header}
        fontSize={20}>
        {text}
      </Text>
    </View>
  );
}
