import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCard from "../component/UI/ProfileCard";
import { Heading } from "../component/UI/Heading";
import Button from "../component/UI/Button";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import useCreateProfile from "./hooks/useCreateProfile";

type Props = {};

const Profile = (props: Props) => {
  const navigation = useNavigation();
  const {createProfile,data,error,}=useCreateProfile();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Heading style={styles.title}>Choose any web3 social</Heading>
      <ProfileCard />
      <Heading style={styles.subtitle}>Don't have any existing social?</Heading>
      <Button
        style={{ backgroundColor: "#242424" }}
        textStyle={{ color: "white" }}
        onPress={() => {
          navigation.navigate("Root")
        }}
      >
        Create Profile
      </Button>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
    color: "#242424",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 24,
    color: "#242424",
  },
});
