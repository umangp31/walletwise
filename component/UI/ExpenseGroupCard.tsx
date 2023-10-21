import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Heading } from "./Heading";
import { black } from "../../constant/colors";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const ExpenseGroupCard = (props: Props) => {
  const navigation = useNavigation();
  return (
      <Pressable onPress={() => navigation.navigate("GroupPage")}>
    <View style={styles.container}>
        <Image
          source={require("../../assets/login.png")}
          style={{ height: 80, width: 80, resizeMode: "contain" }}
        />
        <View
          style={{
            alignSelf: "center",
            justifyContent: "flex-start",
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700", color: black[200] }}>
            Group Name
          </Text>
          <Heading>Owing Status</Heading>
          <Heading>Total</Heading>
        </View>
    </View>
      </Pressable>
  );
};

export default ExpenseGroupCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "white",
    // Add box shadow styles
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: "row",
  },
});
