import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { BottomTabRoutes } from './tabRoutes';
import { WebViewScreen } from '@screens/Webview';

export type StackRoutes = {
  bottomTabRoutes: undefined;
  webview: {
    link: string;
  };
};

export type NativeStackNavigationProps = NativeStackNavigationProp<StackRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<StackRoutes>();

export function Routes() {
  return (
    <Navigator
      initialRouteName="bottomTabRoutes"
      screenOptions={{
        headerShown: false
      }}>
      <Screen name="bottomTabRoutes" component={BottomTabRoutes} />
      <Screen name="webview" component={WebViewScreen} />
    </Navigator>
  );
}
