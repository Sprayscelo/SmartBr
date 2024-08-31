import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text } from 'native-base';
import { useRoute } from '@react-navigation/native';

export function WebViewScreen() {
  const { params } = useRoute();
  const hasLink = params && 'link' in params;

  return (
    <View flex={1}>
      {hasLink ? (
        <WebView source={{ uri: params?.link as string }} />
      ) : (
        <Text>Link não informado para visualização no web</Text>
      )}
    </View>
  );
}
