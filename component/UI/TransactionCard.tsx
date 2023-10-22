import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import useEditProfileStore from "../../store/editProfileStore";
import { Heading } from "./Heading";
import Money from "../../icons/Money";
import { black } from "../../constant/colors";

type Props = {};

const TransactionCard = (props: Props) => {
  const { imageUrl, setImageUrl } = useEditProfileStore();

  return (
    <View
      style={{
        width: "100%",
        // height: 48,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical:8,
        // backgroundColor:"red",
        gap: 12,
      }}
    >
      <View style={{alignItems:"center",paddingRight:8}} >
        <Heading style={{fontWeight:"700",fontSize:12,color:black[100]}} >15</Heading>
        <Heading style={{fontWeight:"700",fontSize:12,color:black[100]}} >Oct</Heading>
      </View>
      <Money height={24} width={24} />
      <View>
        <Heading>Vivek</Heading>
      </View>
      <Heading style={{ fontWeight: "700", color: "#9d4edd" }}>paid</Heading>
      <View>
        <Heading>Harsh</Heading>
      </View>
      <Heading style={{ fontWeight: "900", color: "#9d4edd" }}>Rs. 299</Heading>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({});
