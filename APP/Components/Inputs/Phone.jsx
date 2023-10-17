import React, { useEffect, useState } from "react";

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { flex, space, colors, border, text } from "./../../Styles";

import BasicModal from "../PopUp/BasicModal";

import data from "./dial.json";

import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import useApp from "./../../Hooks/useapp.hook";

const Phone = ({
  validate = -1,
  input = "",
  setInput = () => {},
  setError = () => {},
  dialCode = "+254",
  setDialCode = () => {},
  placeholder = "797046005",
  label = "Phone Number",
  showLabel = true,
  editable = true,
  min = 4,
  mt = 0,
  mb = 0,
}) => {
  const [borderColor, setBorderColor] = useState(colors.primary);

  const [isVisible, setIsVisible] = useState(false);

  const { setPopUp } = useApp();

  const pop = {
    primaryText: "Form Error",
    secondaryText: "Invalid Phone",
    btnText: "Done",
    color: "americanOrange",
    singleVisible: false,
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

  function handleInputChange(n) {
    if (n[0] === "0") {
      return;
    }
    setInput(n);
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
        <TouchableOpacity
          onPress={() => (editable ? setIsVisible(true) : null)}
        >
          <Text
            style={[
              space.mr_10,
              text.robotoRegular,
              text.size_15,
              border.rounded_10,
            ]}
          >
            {dialCode}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={[colors.bgWhite, flex.flex_1, flex.justify_center]}
          onChangeText={(n) => handleInputChange(n)}
          value={input}
          placeholder={placeholder}
          placeholderTextColor={colors.textCoolGrey}
          keyboardType="numeric"
          editable={editable}
        />
        <SimpleLineIcons name="phone" size={24} style={[colors.textCoolGrey]} />
      </View>
      <BasicModal isVisible={isVisible}>
        <View
          style={[
            flex.flex_1,
            colors.bgWhite,
            space.p_10,
            border.rounded_10,
          ]}
        >
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={[flex.row, flex.justify_end, space.mb_10]}
          >
            <MaterialIcons name="cancel" size={30} color={colors.red} />
          </TouchableOpacity>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <DialRow
                key={item.dial_code}
                item={item}
                setDialCode={setDialCode}
                dialCode={dialCode}
                setIsVisible={setIsVisible}
              />
            )}
            ItemSeparatorComponent={<Separator />}
          />
        </View>
      </BasicModal>
    </View>
  );
};

const Separator = () => {
  return (
    <View
      style={[
        space.w_full,
        space.mb_5,
        colors.bgCoolGrey,
        { height: 2, marginTop: 5 },
      ]}
    ></View>
  );
};

const DialRow = ({ item, setDialCode, dialCode, setIsVisible }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setDialCode(item.dial_code);
        setIsVisible(false);
      }}
      style={[
        flex.row,
        flex.justify_between,
        flex.align_center,
        {
          backgroundColor:
            item.dial_code === dialCode ? "rgba(255,0,0,0.1)" : "",
        },
      ]}
    >
      <View style={[flex.row, flex.align_center]}>
        <Image
          source={{
            uri: `data:image/jpeg;base64,${item.flag}`,
          }}
          style={{ height: 25, width: 35, marginRight: 10 }}
        />
        <Text style={[text.robotoBold, text.size_18]}>{item.code}</Text>
      </View>
      <Text
        style={[text.robotoBold, text.size_18, colors.textPrimary, space.mr_10]}
      >
        {item.dial_code}
      </Text>
    </TouchableOpacity>
  );
};

export default Phone;
