import React, { useState, useEffect, Children } from "react";

import { View, TextInput, Text } from "react-native";

import { flex, space, colors, border, text } from "../../Styles";

import { MaterialIcons } from "@expo/vector-icons";

import useApp from "../../Hooks/useapp.hook";

const TextCustomInput = ({
  validate = -1,
  input = {},
  setInput = () => {},
  setError = () => {},
  placeholder = "text ...",
  label = "Text *",
  showLabel = true,
  editable = true,
  mt = 0,
  mb = 0,
  min = 0,
  cap = true,
  custom = false,
  children,
}) => {
  const [borderColor, setBorderColor] = useState(colors.secondary);

  const { setPopUp } = useApp();
  const pop = {
    primaryText: "Form Error",
    secondaryText: `Min char length ${min}`,
    btnText: "Done",
    color: "#6765E8",
    visible: false,
  };

  useEffect(() => {
    if (validate === -1) {
      setBorderColor(colors.white);
      setError(false);
      return;
    }
    if (input.length < min) {
      setPopUp({ ...pop, singleVisible: true });
      setBorderColor(colors.red);
      setError(true);
      return;
    }
    setPopUp({ ...pop, singleVisible: false });
    setBorderColor(colors.bgSecondary);
    setError(false);
  }, [validate]);

  function handleTextChange(txt) {
    if (cap) {
      setInput((txt));
      return;
    }
    setInput(txt);
  }

  return (
    <View style={{ marginTop: mt, marginBottom: mb, width: "100%" }}>
      {showLabel && (
        <Text
          style={[
            text.robotoBlack,
            text.size_16,
            colors.textBlack,
            space.mb_5,
          ]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          
          flex.justify_between,
          flex.row,
          flex.align_center,
          border.rounded_10,
          {
            borderWidth: 1,
            borderColor: borderColor,
            backgroundColor: '#E6E5FF',
          },
          space.px_15,
          space.h_50,
        ]}
      >
        <TextInput
          style={[ space.w_80, flex.justify_center]}
          onChangeText={(txt) => handleTextChange(txt)}
          value={input}
          placeholder={placeholder}
          placeholderTextColor={colors.textCoolGrey}
          editable={editable}
        />
        {custom ? (
          children
        ) : (
          <MaterialIcons name="input" size={24} color={colors.textCoolGrey} />
        )}
      </View>
    </View>
  );
};

export default TextCustomInput;
