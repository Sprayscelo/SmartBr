import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Favorites } from '@screens/Favorites';
import { News } from '@screens/News';

import { theme } from '@theme/index';

export type RoutesProps = {
  News: undefined;
  Favorites: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RoutesProps>();

export function BottomTabRoutes() {
  return (
    <Navigator
      initialRouteName="News"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBarBackgroud,
          height: Platform.OS === 'android' ? 68 : 80
        },
        tabBarItemStyle: {
          paddingVertical: Platform.OS === 'android' ? 10 : 0,
          marginTop: Platform.OS === 'android' ? 0 : 10
        }
      }}>
      <Screen
        name="News"
        component={News}
        options={{
          title: 'Início',
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="home"
              size={22}
              color={focused ? theme.colors.blue : theme.colors.icon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: theme.colors.tabBarLetter,
                fontFamily: focused ? theme.fonts.bold : theme.fonts.light
              }}>
              Início
            </Text>
          )
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="heart-o"
              size={22}
              color={focused ? theme.colors.blue : theme.colors.icon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: theme.colors.tabBarLetter,
                fontFamily: focused ? theme.fonts.bold : theme.fonts.light
              }}>
              Favorito
            </Text>
          )
        }}
      />
    </Navigator>
  );
}
