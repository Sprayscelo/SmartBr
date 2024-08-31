import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/index';
import store from '@redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
