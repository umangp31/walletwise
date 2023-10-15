import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { WalletConnectModal } from '@walletconnect/modal-react-native'
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";

type Props = {
  providerMetadata: {
    name: string;
    description: string;
    url: string;
    icons: string[];
    redirect: {
      native: string;
      universal?: string;
    };
  };
};

const projectId = "d4c2601ac4bccb8fd44de4a451018ff2";

const providerMetadata = {
  name: "walletwise",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function App() {
  const { open, isConnected,address } = useWalletConnectModal();
  console.log(address);
  
  return (
    <>
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
          source={require("./assets/favicon.png")}
          width={100}
          height={100}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 0.2,
          backgroundColor: "white",
        }}
      >
        <Pressable onPress={open}>
          <Text>{isConnected ? "View Account" : "Connect"}</Text>
        </Pressable>
        
      </View>
    </SafeAreaView>
    <WalletConnectModal
    projectId={projectId}
    providerMetadata={providerMetadata}
  />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
