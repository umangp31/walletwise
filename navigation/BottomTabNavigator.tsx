import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  RootStackScreenProps,
  RootTabParamList,
} from "../types/navigation/types";
import { Dimensions, View } from "react-native";
import { Heading } from "../component/UI/Heading";
import { black, white } from "../constant/colors";
import Friends from "../screens/BottomTabs/Friends";
import Group from "../icons/Group";
import Activity from "../screens/BottomTabs/Activity";
import Account from "../screens/BottomTabs/Account";
import FriendsIcon from "../icons/Friends";
import ActivityIcon from "../icons/Activity";
import GroupIcon from "../icons/Group";
import Groups from "../screens/BottomTabs/Groups";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator({
  navigation,
}: RootStackScreenProps<"Root">) {
  const windowHeight = Dimensions.get("window").height;
  let PROFILE_PIC_URI = "";

  return (
    <>
      <BottomTab.Navigator
        initialRouteName="Groups"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerStyle: { backgroundColor: "black", elevation: 2 },
          headerTitle: "",
          headerLeft: () => (
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Heading
                style={{ fontSize: 24, fontWeight: "600", color: "white" }}
              >
                WalletWise
              </Heading>
            </View>
          ),
          tabBarStyle: {
            backgroundColor: black[800],
            alignItems: "center",
            justifyContent: "space-between",
            borderTopColor: "transparent",
            minHeight: windowHeight / 14,
            paddingHorizontal: 5,
            paddingVertical: 10,
          },
          headerShadowVisible: false,
        }}
      >
        <BottomTab.Screen
          name="Groups"
          component={Groups}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    // padding: 5,
                    width: 45,
                    alignContent: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <GroupIcon height={24} width={24} color={white[500]} />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Friends"
          component={Friends}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    // padding: 5,
                    width: 45,
                    alignContent: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <FriendsIcon height={24} width={24} color={white[500]} />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    // padding: 5,
                    width: 45,
                    alignContent: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <ActivityIcon height={24} width={24} color={white[500]} />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Account"
          component={Account}
          options={{
            freezeOnBlur: true,
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    // padding: 5,
                    width: 45,
                    alignContent: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    height: "100%",
                  }}
                ></View>
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
