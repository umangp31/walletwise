import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Container from "../../../component/UI/Container";
import useProfile from "../../hooks/useProfile";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import getIPFSLink from "../../../utils/getIPFSLink";
import useEditProfileStore from "../../../store/editProfileStore";

type Props = {};

const Account = (props: Props) => {
  const { address } = useWalletConnectModal();
  // const { data, error, isLoading, fetchProfile } = useProfile(address!);
  const { imageUrl, setImageUrl, user } = useEditProfileStore();
  // if (isLoading) {
  //   return (
  //     <Container>
  //       <ActivityIndicator size={"large"} />
  //     </Container>
  //   );
  // }
  // if (error) {
  //   console.log(error);
  // }
  // if (data) {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 12,
        }}
      >
        <View>
          <Image
            source={{
              uri: imageUrl || getIPFSLink(`ipfs://${user?.avatar}`),
            }}
            height={100}
            width={100}
            style={{
              borderRadius: 50,
            }}
          />
        </View>
      </View>
      <Text style={{ fontSize: 20 }}>Hello {user?.name ?? ""}</Text>
      <Text>@{user?.username}</Text>
    </Container>
  );
  // }
};

export default Account;

const styles = StyleSheet.create({});
