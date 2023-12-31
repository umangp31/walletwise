import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../types/navigation/types";
import Login from "../screens/Auth/Login";
import BottomTabNavigator from "./BottomTabNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Profile from "../screens/Profile";
import AddProfile from "../screens/AddProfile";
import CreateProfile from "../screens/Auth/CreateProfile";
import GroupPage from "../screens/GroupPage";
const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = {};

export default function StackNavigation({}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animation: "default",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          animation: "default",
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          animation: "default",
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="AddProfile"
        component={AddProfile}
        options={{
          headerShown: false,
          animation: "default",
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{
          headerShown: false,
          animation: "default",
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="GroupPage"
        component={GroupPage}
        options={{
          headerShown: false,
          animation: "default",
          gestureEnabled: false,
          // headerStyle: {
          //   backgroundColor: 'white',
          // },
          // headerTitleStyle: {
          //   color: 'black',
          // },
      
        }}
      />
    </Stack.Navigator>
  );
}
