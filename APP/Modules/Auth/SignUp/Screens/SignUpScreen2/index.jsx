import React from "react";
import { Text, View } from "react-native";
import { colors, flex, space } from "../../../../../Styles";
import BodySection from "./components/BodySection";
import TopNavigation from "./components/TopNavigation";


function SignUpScreen2(props) {
  return (
    <View style={[flex.flex_1,{background: '#FBF4FF'}]}>
      <BodySection />
    </View>
  );
}

export default SignUpScreen2;
