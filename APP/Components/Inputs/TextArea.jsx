import React, { useState, useEffect, Children } from "react";

import { View, TextInput, Text } from "react-native";

import { flex,  space, colors, border, text } from "../../Styles";

import { MaterialIcons } from "@expo/vector-icons";

import useApp from "../../Hooks/useapp.hook";


const TextArea = ({
  validate = -1,
  input = {},
  setInput = () => {},
  setError = () => {},
  placeholder = "text ...",
  label = "Text *",
  showLabel = true,
  editable = true,
  lines = 4,
  mt = 0,
  mb = 0,
  min = 0,
  cap = true,
  custom = false,
  children,
  h = 120,
}) => {
  const [borderColor, setBorderColor] = useState(colors.primary);

  const { setPopUp } = useApp();
  const pop = {
    primaryText: "Form Error",
    secondaryText: `Min char length ${min}`,
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
      return;
    }
    setPopUp({ ...pop, singleVisible: false });
    setBorderColor(colors.primary);
    setError(false);
  }, [validate]);

  function handleTextChange(txt) {
    if (cap) {
      setInput(capitalize(txt));
      return;
    }
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
        ]}
      >
        <TextInput
          style={[
            colors.bgWhite,
            space.w_80,
            flex.justify_center,
            { height: h },
          ]}
          onChangeText={(txt) => handleTextChange(txt)}
          value={input}
          placeholder={placeholder}
          editable={editable}
          multiline={true}
          numberOfLines={4}
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

export default TextArea;
