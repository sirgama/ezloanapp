import React from "react";
import { Text, View } from "react-native";
import { colors, flex, space } from "../../../../../Styles";
import BodySection from "./Components/BodySection";
import { Ionicons } from "@expo/vector-icons";

function ContactChat(props) {
  return (
    <View style={[flex.flex_1, { backgroundColor: "white" }]}>
      <BodySection />
    </View>
  );
}

export default ContactChat;