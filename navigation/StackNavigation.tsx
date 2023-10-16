import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../types/navigation/types";
import Login from "../screens/Auth/Login";
import BottomTabNavigator from "./BottomTabNavigator";
const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = {};

export default function StackNavigation({}: Props) {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
