import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../types/navigation/types";
import Login from "../screens/Auth/Login";
import BottomTabNavigator from "./BottomTabNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Profile from "../screens/Profile";
import AddProfile from "../screens/AddProfile";
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
    </Stack.Navigator>
  );
}
