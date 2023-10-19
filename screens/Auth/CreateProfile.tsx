// import React from "react";
// import { TextInput, TouchableOpacity, View } from "react-native";
// import useEditProfileStore from "store/editProfileStore";
// import useProfileStore from "store/profileStore";
// import getIPFSLink from "utils/getIPFSLink";
// import getRawurl from "utils/getRawURL";
// import * as ImagePicker from "expo-image-picker";

// export default function CreateProfile() {
//   const { currentProfile } = useProfileStore();
//   const { name, description, imageUrl, setName, setDescription, setImageUrl } =
//     useEditProfileStore();
//   const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

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

//   async function pickImage() {
//     if (!status?.granted) {
//       await requestPermission();
//     }
//     if (!status?.granted) return;
//     const image = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });
//     if (!image.canceled) {
//       setImageUrl(image?.assets[0]?.uri);
//     }
//   }

//   async function handleSubmit() {}

//   return (
//     <Container>
//       <View
//         style={{
//           flex: 1,
//           padding: 16,
//           marginVertical: 24,
//           justifyContent: "space-between",
//         }}
//       >
//         <View
//           style={{
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={() => {
//               pickImage();
//             }}
//           >
//             <Avatar src={imageUrl} height={180} width={180} />
//           </TouchableOpacity>
//           <View
//             style={{
//               marginVertical: 48,
//               width: "100%",
//             }}
//           >
//             <View>
//               <Heading
//                 style={{
//                   fontSize: 24,
//                   fontWeight: "500",
//                   color: white[100],
//                 }}
//               >
//                 Name
//               </Heading>
//               <TextInput
//                 placeholder="Enter name"
//                 placeholderTextColor={white[100]}
//                 value={name}
//                 style={{
//                   paddingVertical: 8,
//                   fontSize: 16,
//                   marginTop: 8,
//                   color: white[700],
//                   borderBottomWidth: 1,
//                   borderBottomColor: black[400],
//                   fontWeight: "500",
//                 }}
//                 onChange={(e) => {
//                   setName(e.nativeEvent.text);
//                 }}
//               />
//             </View>
//             <View
//               style={{
//                 marginTop: 24,
//               }}
//             >
//               <Heading
//                 style={{
//                   fontSize: 24,
//                   fontWeight: "500",
//                   color: white[100],
//                 }}
//               >
//                 Description
//               </Heading>
//               <TextInput
//                 placeholder="About yourself"
//                 placeholderTextColor={white[100]}
//                 value={description}
//                 style={{
//                   paddingVertical: 8,
//                   fontSize: 16,
//                   marginTop: 8,
//                   color: white[700],
//                   borderBottomWidth: 1,
//                   borderBottomColor: black[400],
//                   fontWeight: "500",
//                 }}
//                 numberOfLines={4}
//                 multiline={true}
//                 textAlignVertical="top"
//                 onChange={(e) => {
//                   setDescription(e.nativeEvent.text);
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//         <Button
//           onPress={handleSubmit}
//           style={{
//             width: "100%",
//             marginTop: 24,
//           }}
//         >
//           Submit
//         </Button>
//       </View>
//     </Container>
//   );
// }

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const CreateProfile = (props: Props) => {
  return (
    <View>
      <Text>CreateProfile</Text>
    </View>
  )
}

export default CreateProfile

const styles = StyleSheet.create({})