import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Feed} from '../src/screens/feed/feedScreen';
import {NewsDetails} from '../src/screens/NewsDetails/NewDetailsScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Settings} from '../src/components/Settings/Settings';
import { createStackNavigator } from '@react-navigation/stack';
const FeedStack = createSharedElementStackNavigator();
const Stack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <MainTabs.Navigator screenOptions={{headerShown: false}}>
      <MainTabs.Screen name="Feed" component={Feed} />
      <MainTabs.Screen name="Settings" component={Settings} />
    </MainTabs.Navigator>
  );
}
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Feed" component={HomeStackScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};