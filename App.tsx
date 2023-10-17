import { NavigationContainer } from "@react-navigation/native";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { WalletConnectModal } from "@walletconnect/modal-react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
import Navigation from "./navigation";

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
  // const { open, isConnected, address } = useWalletConnectModal();
  // console.log(address);
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation />
      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </SafeAreaProvider>
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
