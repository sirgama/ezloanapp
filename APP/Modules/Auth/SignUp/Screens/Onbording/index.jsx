/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text } from "react-native";
import { flex, space } from "../../../../../Styles";
import BodySection from "./components/BodySection";

const OnboardingScreen1 = () => {
  return (
    <View style={[space.h_full,flex.flex_1,{backgroundColor:"white"}]}>
      <BodySection />
    </View>
  );
};

export default OnboardingScreen1;
