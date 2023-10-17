import React from "react";
import { Text, View } from "react-native";
import { colors, flex, space } from "../../../../../Styles";
import BodySection from "./Components/BodySection";
import { Ionicons } from "@expo/vector-icons";

function ProfileSettings(props) {
  return (
    <View style={[flex.flex_1, { backgroundColor: "white" }]}>
      <BodySection />
    </View>
  );
}

export default ProfileSettings;