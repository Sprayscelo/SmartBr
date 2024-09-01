import { Image } from 'react-native';
import { ElementType, ReactNode } from 'react';
import { Text, View } from 'native-base';
import { theme } from '@theme/index';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  text: string;
  showBackButton?: boolean;
}

export function Header({ text, showBackButton = false }: HeaderProps) {
  const { goBack } = useNavigation();

  return (
    <View
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
