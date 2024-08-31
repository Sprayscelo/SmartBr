import { Text } from 'react-native';
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
          height: 68
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
          tabBarItemStyle: {
            paddingVertical: 10
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: theme.colors.tabBarLetter,
                fontFamily: focused ? 'Inter_Bold' : 'Inter_Light'
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
          tabBarItemStyle: {
            paddingVertical: 10
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: theme.colors.tabBarLetter,
                fontFamily: focused ? 'Inter_Bold' : 'Inter_Light'
              }}>
              Favorito
            </Text>
          )
        }}
      />
    </Navigator>
  );
}
