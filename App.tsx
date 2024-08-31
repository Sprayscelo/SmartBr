import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <Text>Smart Br App</Text>
    </GestureHandlerRootView>
  );
}

export default App;
