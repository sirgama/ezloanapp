import React from "react";

import { TouchableOpacity } from "react-native";

import { colors } from "./../../Styles";

import { AntDesign } from "@expo/vector-icons";

const AbsoluteBtn = ({ click = () => {}, b = 85 }) => {
  return (
    <TouchableOpacity
      onPress={click}
      style={{ position: "absolute", right: 10, bottom: b, zAxis: 200 }}
    >
      <AntDesign name="pluscircle" size={40} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default AbsoluteBtn;
