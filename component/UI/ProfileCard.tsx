import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Lens from "../../icons/Lens";
import { Heading } from "./Heading";
import ENS from "../../icons/ENS";
import Farcaster from "../../icons/Farcaster";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import getAllIdsFromAddress, { APIResponse } from "../../utils/getAllIdsFromAddress";

type Props = {};

const ProfileCard = (props: Props) => {

  const [data, setData] = useState<APIResponse[]>([])
  const { address } = useWalletConnectModal();

  React.useEffect(() => {

    fetchUserProfiles()

  }, [])

  const fetchUserProfiles = async () => {
    try {
      const res = await getAllIdsFromAddress(address || "0xa423A05Eb84EAB65E9137dEabfBD127dc253C052")
      console.log(res)
      setData(res as unknown as APIResponse[])
    } catch (error) {
      console.log(error)
    }
  }
  const cardInfo = [
    {
      cardBgColors: "#ecf8ed",
      cardBorderColors: "#ddf2df",
      cardContent: "lens",
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
    <View style={{ flexWrap: "wrap", flexDirection: "row", gap: 16, padding: 16, justifyContent: "center", }} >
      {data && data.map((item, index) => (
        <>
          <View
            style={{
              height: 150,
              width: 150,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: getSocialCard(item.platform??"")?.borderColor,
              backgroundColor: getSocialCard(item.platform??"")?.bgColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>{getSocialCard(item.platform??"")?.icon}</View>
            <Heading>{item.identity}</Heading>
          </View>
        </>
      ))}
    </View>
  );
};

export default ProfileCard;

function getSocialCard(platformName: string) {
  switch (platformName) {

    case "lens":
      return {
        bgColor: "#ecf8ed",
        borderColor:"#ddf2df",
        icon: <Lens width={56} height={56} />
      }
    case "farcaster":
      return { bgColor: "#efeaf8", 
      borderColor:"#e2dbf3",
      icon: <Farcaster width={56} height={56} /> }
    case "ENS":
      return {
        bgColor: "#ebf3ff",
        borderColor:"#d7e7ff",
        icon: <ENS width={56} height={56} />
      }

  }
}

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
