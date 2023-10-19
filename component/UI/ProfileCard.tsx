import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lens from "../../icons/Lens";
import { Heading } from "./Heading";
import ENS from "../../icons/ENS";
import Farcaster from "../../icons/Farcaster";

type Props = {};

const ProfileCard = (props: Props) => {
  const cardInfo = [
    {
      cardBgColors: "#ecf8ed",
      cardBorderColors: "#ddf2df",
      cardContent: "devumang.lens",
      cardIcon: <Lens width={56} height={56} />,
    },
    {
      cardBgColors: "#ebf3ff",
      cardBorderColors: "#d7e7ff",
      cardContent: "umang.eth",
      cardIcon: <ENS width={56} height={56} />,
    },
    {
      cardBgColors: "#efeaf8",
      cardBorderColors: "#e2dbf3",
      cardContent: "umang.eth",
      cardIcon: <Farcaster width={56} height={56} />,
    },
  ];

  return (
    <View style={{flexWrap:"wrap",flexDirection:"row",gap:16,padding:16,justifyContent:"center",}} >
      {cardInfo.map((item) => (
        <>
          <View
            style={{
              height: 150,
              width: 150,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: item.cardBorderColors,
              backgroundColor: item.cardBgColors,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>{item.cardIcon}</View>
            <Heading>{item.cardContent}</Heading>
          </View>
        </>
      ))}
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
