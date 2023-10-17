import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { RootStackScreenProps } from "../../types/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";

type Props = {};

const Login = ({}: RootStackScreenProps<"Login">) => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const width = Dimensions.get("window").width;
  const { open, isConnected, address, isOpen, close } = useWalletConnectModal();
  useEffect(() => {
    if (isConnected) {
      navigation.navigate("Root");
    }
  }, [isConnected]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        zIndex: 3,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 0.8,
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../../assets/favicon.png")}
          width={100}
          height={100}
        />
      </View>
      <Pressable
      onPress={()=>open()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 0.2,
          backgroundColor: "white",
        }}
      >
          <Text>{isConnected ? "View Account" : "Connect"}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
