import React, { useEffect } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import BasicModal from "./BasicModal";



import { space, text, flex, colors, border } from "./../../Styles";
import BtnBlockPrimary from "../Buttons/BtnBlockPrimary";
import color from "../../Styles/colors/color";

const defaults = {
  primaryText: "Primary Text",
  color: "goGreen",
  icon: "home",
  secondaryText: "Secondary Text",
  btnText: "Done",
  singleVisible: false,
  
};

const PopUpSingle = ({ input = {}, setInput = () => {}, bg="white" }) => {
  let s = 65;

  useEffect(() => {
    setInput({ ...defaults, ...input });
  }, []);

  function handleCallBack() {
    if (input.callBack) {
      input.callBack();
      return;
    }
    setInput({ ...input, singleVisible: false });
  }

  return (
    <BasicModal isVisible={input.singleVisible}>
      <View
        style={[
          {backgroundColor: color[bg]},
          border.rounded_15,
          space.px_40,
          space.py_30,
        ]}
      >
      <View style={[{position:"absolute", top:-15, right:-10}]}>
        {/* <AntDesign name ="closecircle" size={24} onPress={handleCallBack} color={"white"}/> */}
        </View>
        <Text
          style={[
            flex.self_center,
            space.mb_30,
            text.robotoBold,
            text.size_24,
            colors.textPrimary
            // { color: colors[input.color || colors.textPrimary] },
          ]}
        >
          {input.primaryText || "Primary Text"}
        </Text>

        <View
          style={[
            border.rounded_50,
            flex.self_center,
            colors.textWhite,
            flex.justify_center,
            flex.items_center,
            space.mb_30,
            { backgroundColor: "#EBF8F1", width: s, height: s },
          ]}
        >
          {/* <FontAwesome
            name={input.icon || "home"}
            size={55}
            color={colors[input.color || "goGreen"]}
          /> */}
        </View>

        <Text
          style={[
            flex.self_center,
            space.mb_30,
            text.robotoBold,
            text.size_16,
            { color: "#87898E" },
          ]}
        >
          {input.secondaryText || "Secondary Text"}
        </Text>

        <BtnBlockPrimary click={handleCallBack}>
          <Text
            style={[text.robotoRegular, text.size_16, { color: "white" }]}
          >
            {input.btnText || "Done"}
          </Text>
        </BtnBlockPrimary>
      </View>
    </BasicModal>
  );
};

export default PopUpSingle;
