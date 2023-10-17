import React, { useState, useEffect } from "react";

import { View, TextInput, Text } from "react-native";

import { flex, space, colors, border, text } from "./../../Styles";

import { Ionicons } from "@expo/vector-icons";

import useApp from "../../Hooks/useapp.hook";

const Password = ({
  validate = -1,
  input = {},
  setInput = () => {},
  setError = () => {},
  initial = "",
  placeholder = "password",
  label = "Password *",
  showLabel = true,
  min = 4,
  mt = 0,
  mb = 0,
}) => {
  const [borderColor, setBorderColor] = useState(colors.primary);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const { setPopUp } = useApp();
  const pop = {
    primaryText: "Form Error",
    secondaryText: "Invalid Password" || input.error_text,
    btnText: "Done",
    color: "americanOrange",
    visible: false,
  };

  useEffect(() => {
    if (validate === -1) {
      setBorderColor(colors.primary);
      setError(false);
      return;
    }

    if (input.length < min) {
      setPopUp({ ...pop, singleVisible: true });
      setBorderColor(colors.red);
      setError(true);
    } else {
      setBorderColor(colors.primary);
      setError(false);
    }
  }, [validate]);

  function handleTextChange(txt) {
    setInput(txt);
  }

  return (
    <View style={{ marginTop: mt, marginBottom: mb }}>
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
          style={[colors.bgWhite, space.w_80, flex.justify_center]}
          onChangeText={(txt) => handleTextChange(txt)}
          defaultValue={initial}
          // value={input[inputKey]}
          secureTextEntry={!passwordVisible}
          placeholder={placeholder}
        />
        <Ionicons
          onPress={() => setPasswordVisible(!passwordVisible)}
          name="md-eye-outline"
          size={24}
          style={colors.textPrimary}
        />
        {/* <PopUpSingle input={popUp} setInput={setPopUp} /> */}
      </View>
    </View>
  );
};

export default Password;
