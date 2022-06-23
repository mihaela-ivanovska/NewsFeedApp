import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Feed } from "../src/screens/feed/feedScreen";
import { NewsDetails } from "../src/screens/NewsDetails/NewDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings } from "../src/components/Settings/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
const FeedStack = createSharedElementStackNavigator();
const Stack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <MainTabs.Navigator screenOptions={{ headerShown: false }}>
      <MainTabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({}) => (
            <Ionicons color="#444" size={28} name="home-outline" />
          ),
        }}
      />
      <MainTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({}) => (
            <Ionicons color="#444" size={28} name="settings-outline" />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
}
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Feed" component={HomeStackScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{
            cardStyleInterpolator: ({ current: { progress } }) => {
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
