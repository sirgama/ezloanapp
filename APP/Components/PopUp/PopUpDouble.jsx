import React, { useEffect } from "react";

import { View, Text } from "react-native";

import BasicModal from "./BasicModal";



import { space, text, flex, border } from "../../Styles";

import colors from "../../Styles/colors";
import BtnRoundedPrimary from "../Buttons/BtnRoundedPrimary";
import BtnRoundedSecondary from "../Buttons/BtnRoundedSecondary";

const PopUpDouble = ({
  isVisible = false,
  setIsVisible = () => {},
  input = {
    callBackFunc2: () => {
      setIsVisible(false);
    },
    callBackFunc1: () => {
      setIsVisible(false);
    },
  },
  setInput = () => {},
}) => {
  let s = 65;

  useEffect(() => { 
    return setInput({
      callBackFunc2: () => {
        setIsVisible(false);
      },
      callBackFunc1: () => {
        setIsVisible(false);
      },
    });
  }, []);

  return (
    <BasicModal isVisible={isVisible}>
      <View
        style={[
          colors.bgWhite,
          border.rounded_15,
          space.px_40,
          space.py_30,
        ]}
      >
           <View style={[{position:"absolute", top:-15, right:-10}]}>
        {/* <AntDesign name ="closecircle" size={24} onPress={()=>{setIsVisible(false)}} color={"white"}/> */}
        </View>

        <Text
          style={[
            flex.self_center,
            space.mb_30,
            text.robotoBold,
            text.size_24,
            { color: colors[input.color || "goGreen"] },
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

        <View style={[flex.column]}>
          <BtnRoundedSecondary bg={"grey"} click={() => input.callBackFunc1()}>
            <Text style={[text.robotoMedium, text.size_16, { color: "white" }]}>
              {input.btnText || "Cancel"}
            </Text>
          </BtnRoundedSecondary>
          <BtnRoundedPrimary mt={10}  click={() => input.callBackFunc2()}>
            <Text style={[text.robotoMedium, text.size_16, { color: "white" }]}>
              {input.btnText || "Confirm"}
            </Text>
          </BtnRoundedPrimary>
        </View>
      </View>
    </BasicModal>
  );
};

export default PopUpDouble;
