import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { colors, flex, shadow, space } from "../../../Styles";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import topbarlogo from "../../../Assets/Images/topbarlogo.png";
import menuicon from "../../../Assets/Icons/menu.png";
import producticon from "../../../Assets/Icons/productsicon.png";
import { useNavigation } from "@react-navigation/core";

function TopBar(props) {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View
      style={[
        flex.row,
        space.w_full,
        space.px_20,
        { height: 60 },
        flex.justify_between,
        flex.align_center,
      ]}
    >
      <TouchableOpacity onPress={goToProfile}>
        <Image source={menuicon} resizeMode="contain" />
      </TouchableOpacity>
      <View>
        <Image source={topbarlogo} resizeMode="contain" />
      </View>

      <TouchableOpacity
        style={[
          { backgroundColor: "white", height: 40, width: 40, borderRadius: 20 },
          flex.align_center,
          flex.justify_center,
          shadow.shadow1,
        ]}
      >
        <Image source={producticon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

export default TopBar;
