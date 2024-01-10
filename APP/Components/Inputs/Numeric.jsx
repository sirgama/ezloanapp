/* eslint-disable prettier/prettier */
import React, { useState, useEffect, Children } from "react";

import { View, TextInput, Text } from "react-native";

import { flex, space, colors, border, text } from "../../Styles";

import { MaterialIcons } from "@expo/vector-icons";

import useApp from "../../Hooks/useapp.hook";

const Numeric = ({
  validate = -1,
  input = "0",
  setInput = () => {},
  setError = () => {},
  placeholder = "334443",
  label = "Numeric *",
  showLabel = true,
  editable = true,
  mt = 0,
  mb = 0,
  min = 0,
  max = 99999999999999,
  custom = false,
  children,
}) => {
  const [borderColor, setBorderColor] = useState(colors.black);

  const { setPopUp } = useApp();
  const pop = {
    primaryText: "Form Error",
    secondaryText: `Min no char ${min}`,
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
    if (parseInt(input) < min) {
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
    if (min == 0 && txt === "-") {
      return;
    }

    if (parseInt(txt) > max) {
      return;
    }
    // if (parseInt(txt) < min) {
    //   return;
    // }
    setInput(txt);
  }

  return (
    <View style={{ marginTop: mt, marginBottom: mb, width: "100%" }}>
      {showLabel && (
        <Text
          style={[
            text.robotoMedium,
            text.size_16,
            colors.textBlack,
            space.mt_20,
            space.mb_5,{fontWeight:'bold'}
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
            borderColor: '#6765E8',
            backgroundColor: '#E6E5FF',
          },
          space.px_15,
          space.h_50,
        ]}
      >
        <TextInput
          style={[colors.textBlack, space.w_80, flex.justify_center]}
          onChangeText={(txt) => handleTextChange(txt)}
          value={input}
          placeholder={placeholder}
          placeholderTextColor={colors.textGrayDark}
          keyboardType="numeric"
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

export default Numeric;
