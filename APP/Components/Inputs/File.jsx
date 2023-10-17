// import React, { useState, useEffect } from "react";

// import { TouchableOpacity, Pressable, View, Image, Text } from "react-native";

// import { flex, text,space, colors, size, border } from "./../../Styles";

// import useApp from "../../Hooks/useapp.hook";

// import { Foundation } from "@expo/vector-icons";

// import * as ImagePicker from "expo-image-picker";

// import uploadimage from "../../Assets/Images/uploadimage.png"

// const File = ({
//   input = {},
//   setInput = () => {},
//   media = "Images",
//   aspect = [4, 3],
//   setError = () => {},
//   setReupload = () => {},
//   label = "File *",
//   showLabel = true,
//   mt = 0,
//   mb = 0,
//   max = 5,
// }) => {
//   const [borderColor, setBorderColor] = useState(colors.primary);

//   const { setPopUp } = useApp();
//   const pop = {
//     primaryText: "Form Error",
//     secondaryText: "Invalid File",
//     btnText: "Done",
//     color: "americanOrange",
//     visible: false,
//   };

//   async function picker() {
//     let result = null;

//     if (aspect) {
//       result = await ImagePicker.launchImageLibraryAsync({
//         allowsEditing: true,
//         mediaTypes: ImagePicker.MediaTypeOptions[media],
//         aspect: aspect,
//         quality: 0.2,
//       });
//     } else {
//       result = await ImagePicker.launchImageLibraryAsync({
//         allowsEditing: true,
//         mediaTypes: ImagePicker.MediaTypeOptions[media],
//         quality: 0.2,
//       });
//     }

//     if (!result.canceled) {
//       let uri = result.assets[0].uri;
//       let filename = uri.split("/").pop();
//       let match = /\.(\w+)$/.exec(filename);
//       let type = match ? `image/${match[1]}` : `image`;

//       if (input.name) {
//         setReupload((c) => c + 1);
//       }

//       setInput({ uri, name: filename, type });
//     }
//   }

//   return (
//     <View style={{ marginTop: mt, marginBottom: mb }}>
//       {showLabel && (
//         <Text
//           style={[
//             text.robotoMedium,
//             text.size_16,
//             colors.textPrimary,
//             space.mb_5,
//           ]}
//         >
//           {label}
//         </Text>
//       )}
//           <TouchableOpacity onPress={picker} style={[space.margin_10,border.dashed,border.rounded_10,{borderColor:colors.coolgrey,borderWidth:1,height:150,},flex.justify_center,flex.align_center]}>
//             <View style={[flex.align_center]} >
//                 <Image source={uploadimage}/>
//                 <Text style={[space.mt_10,text.size_18,colors.textCoolGrey,text.robotoMedium]}>Upload product image</Text>
//             </View>
//         </TouchableOpacity>
//     </View>
//   );
// };

// export default File;
