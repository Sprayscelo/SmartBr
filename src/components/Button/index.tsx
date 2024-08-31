import { theme } from '@theme/index';
import { Pressable, Text, IPressableProps } from 'native-base';
import { ElementType } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ButtonProps extends IPressableProps {
  text: string;
  type: 'Favorite' | 'Remove' | 'ViewAll';
}

export function Button({ text, type, ...props }: ButtonProps) {
  return (
    <Pressable
      {...props}
      borderWidth={1}
      borderColor={theme.colors.border}
      borderRadius={6}
      paddingY={3.5}
      flexGrow={1}
      justifyContent={'center'}
      style={{ gap: 15 }}
      flexDirection={'row'}>
      {type !== 'ViewAll' && (
        <FontAwesome name="heart" size={20} color={theme.colors.icon} />
      )}
      <Text
        fontFamily={theme.fonts.medium}
        fontSize={14}
        color={theme.colors.letter}>
        {text}
      </Text>
      {type === 'ViewAll' && (
        <AntDesign name="arrowright" size={20} color={theme.colors.icon} />
      )}
    </Pressable>
  );
}
