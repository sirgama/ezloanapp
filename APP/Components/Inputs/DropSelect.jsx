/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

import { TouchableOpacity, Pressable, View, Image, Text } from "react-native";

import { flex, text, space, colors, size, border } from "./../../Styles";



import useApp from "../../Hooks/useapp.hook";

const DropSelect = ({
  input = "",
  setInput = () => {},
  setError = () => {},
  items = [],
  disabled = false,
  firstDisabled = true,
  label = "Select Option *",
  mt = 0,
  mb = 0,
  gapy = 10,
  validate = -1,
  required = true,
  showLabel = true,
}) => {
  const [borderColor, setBorderColor] = useState(colors.primary);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const { setPopUp } = useApp();
  const pop = {
    primaryText: "Form Error",
    secondaryText: `Select Option`,
    btnText: "Done",
    color: "americanOrange",
    visible: false,
  };

  function handleSelect(txt) {
    setInput(txt);
    setOpen(false);
  }

  useEffect(() => {
    for (let item of items) {
      if (item.value === input) {
        setSelected(item.label);
        return;
      }
    }
  }, [input, items]);

  useEffect(() => {
    if (validate === -1 || required === false) {
      setBorderColor(colors.primary);

      return;
    }
    if (input === "") {
      setPopUp({ ...pop, singleVisible: true });
      setBorderColor(colors.red);
      setError(true);
    }
  }, [validate]);

  return (
    <Pressable
      style={{ marginTop: mt, marginBottom: mb }}
      onPress={() => (disabled ? null : setOpen(!open))}
    >
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
        <Text style={[text.robotoBold]}>{selected}</Text>
        {/* <AntDesign name="caretdown" size={15} color={colors.taupegray} /> */}
      </View>
      <DropSection
        open={open}
        firstDisabled={firstDisabled}
        handleSelect={handleSelect}
        items={items}
      />
    </Pressable>
  );
};

const DropSection = ({ open, firstDisabled, handleSelect, items }) => {
  if (open === false) return null;

  return (
    <View
      style={[
        space.p_10,
        space.mx_10,
        border.rounded_bottom_15,
        {
          backgroundColor: "rgba(0,0,0,0.05)",
          borderColor: colors.primary,
          borderWidth: 1,
        },
      ]}
    >
      {items.map((doc, index) => {
        if (firstDisabled === true && index == 0) {
          return null;
        }
        return (
          <TouchableOpacity
            key={index}
            style={[]}
            onPress={() => handleSelect(doc.value)}
          >
            <Text style={[text.robotoMedium, text.size_16, space.p_5]}>
              {doc.label}
            </Text>
            <View style={{ height: 1, backgroundColor: colors.primary }}></View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DropSelect;
