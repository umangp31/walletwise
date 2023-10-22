import { useNavigation } from "@react-navigation/native";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import React, { useEffect } from "react";
import { Dimensions, Image, SafeAreaView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../component/UI/Button";
import { Heading } from "../../component/UI/Heading";
import { black } from "../../constant/colors";
import { RootStackScreenProps } from "../../types/navigation/types";
import useProfile from "../hooks/useProfile";
import useEditProfileStore from "../../store/editProfileStore";
type Props = {};

const Login = ({}: RootStackScreenProps<"Login">) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const { open, isConnected, address, isOpen, close } = useWalletConnectModal();
  const { setUser } = useEditProfileStore();
  const {
    data: profileData,
    error: profileError,
    isLoading: profileLoading,
    fetchProfile,
  } = useProfile(address!);

  useEffect(() => {
    handleNavigation();
  }, [isConnected, profileLoading]);

  const handleNavigation = async () => {
    const userProfile = await fetchProfile();
    console.log(userProfile,'ff');
    
    if (userProfile) {
      setUser(userProfile);
      navigation.navigate("Root");
    } else if (isConnected) {
      navigation.navigate("Profile");
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        zIndex: 3,
        paddingTop: top,
        flex: 1,
      }}
    >
      <Image
        source={require("../../assets/login.png")}
        style={{
          height: height / 2,
          width: width,
          objectFit: "cover",
        }}
        // contentFit="cover"
      />
      <View
        style={{
          flex: 1,
          padding: 16,
          zIndex: 2,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 48,
          }}
        >
          <Heading
            style={{
              fontSize: 48,
              fontWeight: "800",
              color: "#242424",
            }}
          >
            Division made
          </Heading>
          <Heading
            style={{
              fontSize: 48,
              fontWeight: "700",
              color: black[300],
            }}
          >
            easy
          </Heading>
        </View>
        <Button
          onPress={open}
          style={{
            width: "100%",
            marginVertical: 8,
            backgroundColor: "#242424",
          }}
          textStyle={{ color: "white" }}
          isLoading={isLoading}
        >
          Connect wallet
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
