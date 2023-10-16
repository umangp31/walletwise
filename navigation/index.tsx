import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigation from "./StackNavigation";

type Props = {};

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
