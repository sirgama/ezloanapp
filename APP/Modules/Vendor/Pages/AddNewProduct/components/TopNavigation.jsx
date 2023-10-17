import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, flex, space, text, shadow } from "../../../../../Styles";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

function TopNavigation(props) {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={[
        flex.row,
        space.w_full,
        space.px_10,
        { height: 60 },
        flex.justify_between,
        flex.align_center,
        colors.bgWhite,
      ]}
    >
      <TouchableOpacity
        style={[
          { backgroundColor: "white", height: 40, width: 40, borderRadius: 20 },
          flex.align_center,
          flex.justify_center,
          shadow.shadow1,
        ]}
        onPress={goBack}
      >
        <Ionicons
          name="chevron-back-sharp"
          size={25}
          color={"black"}
          style={[flex.self_center]}
         
        />
      </TouchableOpacity>

      <Text style={[text.size_25, colors.textPrimary, text.robotoBold]}>
        Add New Product
      </Text>

      <TouchableOpacity
        style={[
          { backgroundColor: "white", height: 40, width: 40, borderRadius: 20 },
          flex.align_center,
          flex.justify_center,
          shadow.shadow1,
        ]}
        onPress={goBack}
      >
        <AntDesign
          name="close"
          size={30}
          color={colors.secondary}
        />
      </TouchableOpacity>
    </View>
  );
}

export default TopNavigation;
