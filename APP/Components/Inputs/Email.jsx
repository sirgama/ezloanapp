import React, { useState, useEffect } from "react";

import { View, TextInput, Text } from "react-native";

import { flex,space, colors, border, text } from "./../../Styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import useApp from "../../Hooks/useapp.hook";

const Email = ({
  validate = -1,
  input = {},
  setInput = () => {},
  setError = () => {},
  placeholder = "ezloan@gmail.com",
  label = "Email *",
  showLabel = true,
  editable = true,
  mt = 0,
  mb = 0,
}) => {
  const [borderColor, setBorderColor] = useState(colors.primary);

  const { setPopUp } = useApp()
  const pop = {
    primaryText: "Form Error",
    secondaryText: "Invalid Email",
    btnText: "Done",
    color: "americanOrange",
    visible: false,
  };

  useEffect(() => {
    if (validate === -1) {
      setBorderColor(colors.black);
      setError(false);
      return;
    }
    const strongRegex = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );

    if (!strongRegex.test(input || "")) {
      setPopUp({ ...pop, singleVisible: true });
      setBorderColor(colors.red);
      setError(true);
      return;
    }
    setPopUp({ ...pop, singleVisible: false });
    setBorderColor(colors.primary);
    setError(false);
  }, [validate]);

  function handleTextChange(txt) {
    setInput(txt);
  }

  return (
    <View style={{ marginTop: mt, marginBottom: mb, width: "100%" }}>
      {showLabel && (
        <Text
          style={[
            text.robotoMedium,
            text.size_16,
            colors.textPrimary,
            space.mb_5,
          ]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          colors.bgWhite,
          flex.justify_between,
          flex.row,
          flex.align_center,
          border.rounded_10,
          {
            borderWidth: 1,
            borderColor: borderColor,
          },
          space.px_15,
          space.h_50,
        ]}
      >
        <TextInput
          style={[colors.white, space.w_80, flex.justify_center]}
          onChangeText={(txt) => handleTextChange(txt)}
          value={input}
          placeholder={placeholder}
          placeholderTextColor={colors.textCoolGrey}
          keyboardType="email"
          editable={editable}
        />
        <MaterialCommunityIcons
          name="email"
          size={24}
          style={colors.textCoolGrey}
        />
        {/* <PopUpSingle input={popUp} setInput={setPopUp} /> */}
      </View>
    </View>
  );
};

export default Email;
