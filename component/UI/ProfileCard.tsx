import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lens from "../../icons/Lens";
import { Heading } from "./Heading";

type Props = {};

const ProfileCard = (props: Props) => {
  const cardBgColors = ["#ecf8ed", "#ebf3ff", "#efeaf8"];
  const cardBorderColors = ["#ddf2df", "#d7e7ff", "#e2dbf3"];

  return (
    <View>
      <View style={styles.cardContainer}>
        <View>
          <Lens width={56} height={56} />
        </View>
        <Heading>devumang.lens</Heading>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 170,
    width: 170,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ddf2df",
    backgroundColor: "#ecf8ed",
    justifyContent: "center",
    alignItems: "center",
  },
});
