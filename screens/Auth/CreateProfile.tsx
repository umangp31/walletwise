import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Container from "../../component/UI/Container";
import Avatar from "../../component/UI/Avatar";
import { Heading } from "../../component/UI/Heading";
import { black, white } from "../../constant/colors";
import Button from "../../component/UI/Button";
import useEditProfileStore from "../../store/editProfileStore";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
export default function CreateProfile() {
  const {
    handle,
    name,
    description,
    imageUrl,
    setHandle,
    setName,
    setDescription,
    setImageUrl,
  } = useEditProfileStore();
  const navigation = useNavigation();
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  //   React.useEffect(() => {
  //     const avatar = getIPFSLink(getRawurl(currentProfile?.picture));
  //     if (currentProfile?.name) {
  //       setName(currentProfile?.name);
  //     }
  //     if (currentProfile?.bio) {
  //       setDescription(currentProfile?.bio);
  //     }
  //     if (avatar) {
  //       setImageUrl(avatar);
  //     }
  //   }, []);

  async function pickImage() {
    if (!status?.granted) {
      await requestPermission();
    }
    if (!status?.granted) return;
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!image.canceled) {
      setImageUrl(image?.assets[0]?.uri);
    }
  }

  async function handleSubmit() {
    navigation.navigate("Root");
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 16,
          marginVertical: 24,
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              pickImage();
            }}
          >
            <Avatar src={imageUrl} height={180} width={180} />
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 48,
              width: "100%",
            }}
          >
            <View style={{ marginBottom: 24 }}>
              <Heading
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  color: black[100],
                }}
              >
                Handle
              </Heading>
              <TextInput
                placeholder="Enter your handle name"
                placeholderTextColor={black[100]}
                value={handle}
                style={{
                  paddingVertical: 8,
                  fontSize: 16,
                  marginTop: 8,
                  color: black[700],
                  borderBottomWidth: 1,
                  borderBottomColor: white[400],
                  fontWeight: "500",
                }}
                onChange={(e) => {
                  setHandle(e.nativeEvent.text);
                }}
              />
            </View>
            <View>
              <Heading
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  color: black[100],
                }}
              >
                Name
              </Heading>
              <TextInput
                placeholder="Enter name"
                placeholderTextColor={black[100]}
                value={name}
                style={{
                  paddingVertical: 8,
                  fontSize: 16,
                  marginTop: 8,
                  color: black[700],
                  borderBottomWidth: 1,
                  borderBottomColor: white[400],
                  fontWeight: "500",
                }}
                onChange={(e) => {
                  setName(e.nativeEvent.text);
                }}
              />
            </View>
            <View
              style={{
                marginTop: 24,
              }}
            >
              <Heading
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  color: black[100],
                }}
              >
                Description
              </Heading>
              <TextInput
                placeholder="About yourself"
                placeholderTextColor={black[100]}
                value={description}
                style={{
                  paddingVertical: 8,
                  fontSize: 16,
                  marginTop: 8,
                  color: black[700],
                  borderBottomWidth: 1,
                  borderBottomColor: white[400],
                  fontWeight: "500",
                }}
                numberOfLines={1}
                multiline={true}
                textAlignVertical="top"
                onChange={(e) => {
                  setDescription(e.nativeEvent.text);
                }}
              />
            </View>
          </View>
        </View>
        <Button
          onPress={handleSubmit}
          style={{
            width: "100%",
            marginTop: 24,
            backgroundColor: black[500],
          }}
          textStyle={{ color: "white" }}
        >
          Submit
        </Button>
      </View>
    </Container>
  );
}
