import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Container from "../../../component/UI/Container";
import Avatar from "../../../component/UI/Avatar";
import * as ImagePicker from "expo-image-picker";
import useCreateGroup from "../../hooks/useCreateGroup";
import { Heading } from "../../../component/UI/Heading";
import Button from "../../../component/UI/Button";
import { black, white } from "../../../constant/colors";
import uploadImageToIPFS from "../../../utils/uploadToIPFS";
import useEditProfileStore from "../../../store/editProfileStore";

type Props = {};

const Friends = (props: Props) => {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const { isLoading, error, createGroup } = useCreateGroup();
  const { user } = useEditProfileStore();

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

  const handleSubmit = async () => {
    try {
      const imgResponse = await fetch(imageUrl);
      const blob = await imgResponse.blob();
      let IPFSUri;
      if (imageUrl) {
        IPFSUri = await uploadImageToIPFS(blob);
      }
      await createGroup({
        description: description,
        name: name,
        avatar: IPFSUri!,
        creator_user_id: user?.username!,
      });
    } catch (error) {
      console.log("error in creating profile", error);
    }
  };
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
          {isLoading ? <ActivityIndicator /> : "Submit"}
        </Button>
      </View>
    </Container>
  );
};

export default Friends;

const styles = StyleSheet.create({});
