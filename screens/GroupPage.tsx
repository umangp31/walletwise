import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Heading } from "../component/UI/Heading";
import { black } from "../constant/colors";
import TransactionCard from "../component/UI/TransactionCard";
import * as ImagePicker from "expo-image-picker";

type Props = {};

const GroupPage = (props: Props) => {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  // async function pickImage() {
  //   if (!status?.granted) {
  //     await requestPermission();
  //   }
  //   if (!status?.granted) return;
  //   const image = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [1, 1],
  //     quality: 1,
  //   });
  //   if (!image.canceled) {
  //     setImageUrl(image?.assets[0]?.uri);
  //   }
  // }

  return (
    <View>
      <View style={{ width: "100%", height: 200, backgroundColor: "green" }}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </View>
      {/* <View style={{ paddingHorizontal: 24, position: "absolute", top: 150 }}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/5935189/pexels-photo-5935189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{
            height: 100,
            width: 100,
            resizeMode: "cover",
            borderRadius: 50,
            // borderWidth: 4,
            borderColor: black[700],
          }}
        />
      </View> */}
      <View style={{ paddingHorizontal: 24,paddingVertical:12}}>
        <Text style={{ fontSize: 28, fontWeight: "700", color: black[200] }}>
          Eth BoomBam
        </Text>
        <Heading
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: black[200],
            paddingVertical: 4,
          }}
        >
          Sahil owes you $1000
        </Heading>
        <Heading
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: black[200],
            paddingVertical: 4,
          }}
        >
          Vivek owes you $200
        </Heading>
        <Heading
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: black[200],
            paddingVertical: 4,
          }}
        >
          Total: $1200
        </Heading>
        <ScrollView style={{ paddingVertical: 16 }}>
          <Heading
            style={{ color: black[200], fontWeight: "600", fontSize: 18 }}
          >
            October 2023
          </Heading>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "white",
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
